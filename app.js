const quiz = [
  {
    question: 'みちのく潮風トレイルを南下するとき、起点となる八戸市の神社は何神社でしょう？',
    answers: [ '蕪島神社', '厳島神社', '塩釜神社', '相馬神社'],
    correct: '蕪島神社'
  }, {
    question: '次のうち、みちのく潮風トレイルを流れていない川はどれでしょう？',
    answers: [ '安家川', '七北田川', '宇田川', '雄物川'],
    correct: '雄物川'
  }, {
    question: '相馬神社の祭神は次のうち何？',
    answers: [ '馬', '人', '山', '田'],
    correct: '人'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
