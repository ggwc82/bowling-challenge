function ScoreCard(){
  this.show = {};
  this.frameNumber = 1;
  this.currentFrame = [];
  this.spare = false;
  this.bonus = 0;
  this.strike = false;
  this.strikeBonus = 0;
  this.strikeCarry = false;
}

ScoreCard.prototype.add = function(score){
  if (this.currentFrame.length === 1) {
    this.currentFrame.push(score); var key = "Frame " + this.frameNumber;
    this.show[key] = this.currentFrame;
    this.frameNumber++;

    if (this.currentFrame[0] + this.currentFrame[1] === 10) {
      this.spare = true;
    }

  } else {
    if (score === 10){
      this.strike = true; 
      this.currentFrame.push(score); var key = "Frame " + this.frameNumber;
      this.show[key] = this.currentFrame;
      this.frameNumber++;
    };

    if (this.spare === true){
      this.bonus = score;
    }
    else {
      this.currentFrame = [score];
    }
  }
};

ScoreCard.prototype.isFinished = function(){
  return (this.frameNumber === 11);
};
