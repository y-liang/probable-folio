import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


interface Candidate {
  name: any;
  votes: number;
  eliminated: boolean;
}


@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.less']
})
export class PreferenceComponent implements OnInit {
  result: string;

  MAX_CANDIDATES = 10;
  MAX_VOTERS = 20;
  candidateCountOptions: number[];
  voterCountOptions: number[];

  candidateCount: number;
  voterCount: number;


  candidateNames = [];
  voterPreferences = [];

  candidateNamesAll = [];

  candidates: Candidate[] = [];
  preferences = [];

  isCandidateFull: boolean = false;
  isPreferenceFull: boolean = false;
  isReady: boolean = false;
  isSubmitted: boolean = false;

  mainForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createOptions();
    this.createForm();


  }

  createOptions() {
    this.candidateCountOptions = Array.from({ length: this.MAX_CANDIDATES }, (value, key) => key + 1);
    this.voterCountOptions = Array.from({ length: this.MAX_VOTERS }, (v, k) => k + 1);
  }

  createForm() {
    this.mainForm = this.formBuilder.group({

      candidateCountCtrl: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.min(2), Validators.max(9)]],
      voterCountCtrl: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.min(2), Validators.max(9)]],

      candidateNameCtrl: ['', Validators.required],
      voterPreferenceCtrl: ['', Validators.required],

    });

  }

  get candidateCountCtrl() { return this.mainForm.get('candidateCountCtrl'); }
  get voterCountCtrl() { return this.mainForm.get('voterCountCtrl'); }

  get candidateNameCtrl() { return this.mainForm.get('candidateNameCtrl'); }
  get voterPreferenceCtrl() { return this.mainForm.get('voterPreferenceCtrl'); }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addCandidate() {
    console.log(this.candidateCountCtrl.errors);

    this.candidateNames.push(this.candidateNameCtrl.value);
    this.candidateNameCtrl.reset();

    this.candidateCount = parseInt(this.candidateCountCtrl.value);

    // this.candidates = Array.from({ length: this.candidateCount }, () => new Candidate);


    if (this.candidateNames.length == this.candidateCount) {
      this.isCandidateFull = true;
      this.candidateNamesAll = [...this.candidateNames];

      // array this.candidates populated
      for (let i = 0; i < this.candidateNames.length; i++) {
        this.candidates.push({
          name: this.candidateNames[i],
          votes: 0,
          eliminated: false
        } as Candidate);
      }

    }

  }



  clearFields() {
    this.isCandidateFull = false;
    this.preferences = [];


  }

  addPreference() {



    this.preferences.push(this.voterPreferences);
    this.voterPreferences = [];

    // repopulate candidate names
    this.candidateNames = [...this.candidateNamesAll];


    this.voterCount = parseInt(this.voterCountCtrl.value);



    if (this.preferences.length == this.voterCount) {
      this.isPreferenceFull = true;
      this.isReady = true;
    }

  }

  formSubmitted() {
    this.isSubmitted = true;
  }


  computeNow() {

    this.calculateVotes();

    while (true) {
      if (this.hasMajority()) {


        return this.result = this.candidates.find(candidate => candidate.votes > (this.voterCount / 2)).name;

      } else if (this.isTie()) {


        return this.result = this.candidates.filter(candidate => candidate.eliminated == false).map(value => value.name).join(' & ');

      } else {
        this.eliminateUnpopular();
        this.calculateVotes();
      }
    }
  }


  calculateVotes() {

    // clear all votes
    for (let i = 0; i < this.candidateCount; i++) {
      this.candidates[i].votes = 0;
    }

    // calculate votes
    voterLoop:
    for (let i = 0; i < this.voterCount; i++) {

      candidateLoop:
      for (let j = 0; j < this.candidateCount; j++) {
        let preferredCandidate = this.preferences[i][j];

        // find the first preferred candidate that has not yet been eliminated
        if (this.candidates.find(candidate => candidate.name == preferredCandidate).eliminated == false) {
          this.candidates.find(candidate => candidate.name == preferredCandidate).votes += 1;
          break candidateLoop;
        }
      }
    }


  }

  // find if there's a majority vote, more than 50%
  hasMajority() {

    for (let j = 0; j < this.candidateCount; j++) {
      if (this.candidates[j].votes > (this.voterCount / 2)) {
        // this.result = this.candidates[j].name;
        return true;
        // return will get out of this  and break only get out of the loop
      }
    }

    return false;
  }

  isTie() {

    let remainingCandidates = this.candidates.filter(candidate => candidate.eliminated == false);
    console.log(remainingCandidates);


    let hasSameVote = (item, index, array) => {
      if (index == 0) {
        return true;
      } else {
        return item.votes == array[index - 1].votes;
      }
    };

    return remainingCandidates.every(hasSameVote); // true of false
  }

  // find the least popular candidates
  eliminateUnpopular() {
    let sortedCandidates = [...this.candidates];
    sortedCandidates.sort((a, b) => a.votes - b.votes); // ascending votes array
    let lowestVote = sortedCandidates[0].votes;


    // eliminate the lowest vote
    for (let i = 0; i < this.candidateCount; i++) {
      if (this.candidates[i].votes == lowestVote) {
        this.candidates[i].eliminated = true;
      }
    }

  }

}
