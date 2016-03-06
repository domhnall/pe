fs = require('fs');
(function() {
  "use strict";
  require('../problem_21/array_utils').init();

  const Game = function(arr) {
    this.player_1 = new Hand(arr.splice(0,5));
    this.player_2 = new Hand(arr);
    this.rank_1 = this.player_1.rank();
    this.rank_2 = this.player_2.rank();
  };

  Game.prototype.toString = function() {
    return `Player 1:\n ${this.player_1.toString()}\nPlayer 2:\n ${this.player_2.toString()}`;
  };

  Game.prototype.winner = function() {
    let rank_1_index = Object.keys(Hand.prototype.RANKS).indexOf(this.rank_1);
    let rank_2_index = Object.keys(Hand.prototype.RANKS).indexOf(this.rank_2);
    if(rank_1_index<rank_2_index){
      return 1;
    }else if(rank_1_index>rank_2_index){
      return 2;
    }else if(rank_1_index===rank_2_index){
      let counts_1 = this.player_1.grouped_by_counts();
      let counts_2 = this.player_2.grouped_by_counts();
      for(let i=0, len=counts_1.length; i<len; i++) {
        let player_1_card_val = Card.prototype.VALUES.indexOf(counts_1[i][1]),
            player_2_card_val = Card.prototype.VALUES.indexOf(counts_2[i][1]);

        if(player_1_card_val>player_2_card_val){
          return 1;
        }else if(player_2_card_val>player_1_card_val){
          return 2;
        }
      }
      return 0;
    }
  };

  const Hand = function(arr){
    this.cards = arr.map((str)=>{ return new Card(str); })
                    .sort(function(a,b){ return Card.prototype.VALUES.indexOf(a.value)-Card.prototype.VALUES.indexOf(b.value); });
  };

  Hand.prototype.toString = function(){
    return this.cards.reduce((p,c)=>{ return `${p} ${c.toString()}`; }, '');
  };


  Hand.prototype.is_straight = function(){
    let indices = this.cards.map((c)=>{ return Card.prototype.VALUES.indexOf(c.value); }).unique();
    return indices.length===5 && ( (indices[4]-indices[0])===4      ||
                                   indices.equals([0,9,10,11,12])   ||
                                   indices.equals([0,1,10,11,12])   ||
                                   indices.equals([0,1,2,11,12])    ||
                                   indices.equals([0,1,2,3,12]) );
  };

  Hand.prototype.is_flush = function(){
    return this.cards
               .map((c)=>{ return c.suit; })
               .unique()
               .length===1;
  };

  Hand.prototype.is_straight_flush = function(){
    return this.is_flush() && this.is_straight();
  };

  Hand.prototype.is_royal_flush = function(){
    return this.is_straight_flush() && this.highest_card().value==='A';
  };

  Hand.prototype.grouped_by_value = function(){
    return this.cards.reduce((p,c)=>{ (p[c.value] ? p[c.value]+=1 : p[c.value]=1); return p; }, {});
  };

  Hand.prototype.grouped_by_value_counts = function(){
    return Object.keys(this.grouped_by_value()).map((k)=>{ return this.grouped_by_value()[k]; });
  };

  Hand.prototype.grouped_by_counts = function(){
    return Object.keys(this.grouped_by_value())
                 .map((k)=>{ return [this.grouped_by_value()[k], k]; })
                 .sort((a,b)=>{ return b[0]-a[0]===0 ?
                                       Card.prototype.VALUES.indexOf(b[1])-Card.prototype.VALUES.indexOf(a[1]) :
                                       b[0]-a[0]; });
  };

  Hand.prototype.is_four_of_a_kind = function(){
    return this.grouped_by_value_counts().indexOf(4)>=0;
  };

  Hand.prototype.is_three_of_a_kind = function(){
    return this.grouped_by_value_counts().indexOf(3)>=0;
  };

  Hand.prototype.is_two_pairs = function(){
    let first = this.grouped_by_value_counts().indexOf(2);
    return (first>=0) && this.grouped_by_value_counts().indexOf(2,first+1)>=0;
  };

  Hand.prototype.is_one_pair = function(){
    return this.grouped_by_value_counts().indexOf(2)>=0;
  };

  Hand.prototype.is_full_house = function(){
    return this.grouped_by_value_counts().indexOf(3)>=0 &&
           this.grouped_by_value_counts().indexOf(2)>=0;
  };

  Hand.prototype.highest_card = function(){
    return this.cards[4];
  };

  Hand.prototype.RANKS = { 'royal_flush':  Hand.prototype.is_royal_flush,
                           'straight_flush': Hand.prototype.is_straight_flush,
                           'four_of_a_kind': Hand.prototype.is_four_of_a_kind,
                           'full_house': Hand.prototype.is_full_house,
                           'flush': Hand.prototype.is_flush,
                           'straight': Hand.prototype.is_straight,
                           'three_of_a_kind': Hand.prototype.is_three_of_a_kind,
                           'two_pairs': Hand.prototype.is_two_pairs,
                           'one_pair': Hand.prototype.is_one_pair,
                           'high_card': function(){ return true; } };

  Hand.prototype.rank = function(){
    let ranks = Object.keys(Hand.prototype.RANKS);
    for(let i=0, len=ranks.length; i<len; i++) {
      if(this.RANKS[ranks[i]].apply(this)){
        return ranks[i];
      }
    }
    return 'high_card';
  };

  const Card = function(card){
    this.value = card.split('')[0];
    this.suit  = card.split('')[1];
  };

  Card.prototype.toString = function(){
    return `${this.value}|${this.suit}`;
  };

  Card.prototype.VALUES = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

  Card.prototype.higher = function(card){
    return this.VALUES.indexOf(this.value)>this.VALUES.indexOf(card.value);
  };

  Card.prototype.same_suit = function(card){
    return this.suit===card.suit;
  };

  let get_hands = function(data) {
    return data.split("\n")
               .filter((el)=>{ return el!==""; })
               .map((h)=>{ return new Game(h.split(' ')); });
  };

  fs.readFile('./poker.txt', 'utf8', function (err,data) {
    if (err) { return console.log(err); }
    let games = get_hands(data),
        count = 0;
    for(let i=0, len=games.length; i<len; i++) {
      console.log(games[i].toString());
      console.log(games[i].winner());
      console.log(`Player 1: ${games[i].rank_1}`);
      console.log(`Player 2: ${games[i].rank_2}`);
      console.log(`####################################\n\n`);
      if(games[i].winner()===1){ count ++; }
    }
    console.log(`Total hands won by player 1: ${count}`);
  });

}());
