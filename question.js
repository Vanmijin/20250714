// 퀴즈 문제 데이터 (예상 문제.txt 기반 예시)
const quizData = [
    {
        question: '다음 중 HTML의 기본 구조에 포함되지 않는 것은?',
        choices: ['<head>', '<body>', '<footer>', '<style>'],
        answer: 3
    },
    {
        question: 'CSS에서 글자색을 지정하는 속성은?',
        choices: ['background', 'color', 'font-size', 'border'],
        answer: 1
    },
    {
        question: '자바스크립트에서 변수 선언 키워드가 아닌 것은?',
        choices: ['var', 'let', 'const', 'int'],
        answer: 3
    },
    {
        question: '이미지 파일을 웹페이지에 삽입할 때 사용하는 태그는?',
        choices: ['<img>', '<image>', '<src>', '<pic>'],
        answer: 0
    },
    {
        question: 'CSS에서 배경색을 지정하는 속성은?',
        choices: ['color', 'background', 'border', 'margin'],
        answer: 1
    },
    {
        question: 'HTML에서 링크를 만드는 태그는?',
        choices: ['<a>', '<link>', '<href>', '<url>'],
        answer: 0
    },
    {
        question: '자바스크립트에서 함수를 선언할 때 사용하는 키워드는?',
        choices: ['function', 'def', 'method', 'func'],
        answer: 0
    },
    {
        question: 'HTML에서 목록을 만들 때 사용하는 태그는?',
        choices: ['<ul>', '<li>', '<ol>', '<list>'],
        answer: 0
    },
    {
        question: 'CSS에서 테두리를 지정하는 속성은?',
        choices: ['border', 'outline', 'frame', 'box'],
        answer: 0
    },
    {
        question: '자바스크립트에서 배열의 길이를 구하는 속성은?',
        choices: ['size', 'length', 'count', 'total'],
        answer: 1
    },
    // 예시 문제.txt 기반 연습문제 추가
    {
        question: 'HTML에서 텍스트를 굵게 표시하는 태그는?',
        choices: ['<b>', '<strong>', '<bold>', '<em>'],
        answer: 0
    },
    {
        question: 'CSS에서 요소의 바깥 여백을 지정하는 속성은?',
        choices: ['margin', 'padding', 'border', 'outline'],
        answer: 0
    },
    {
        question: '자바스크립트에서 조건문을 작성할 때 사용하는 키워드는?',
        choices: ['if', 'switch', 'for', 'while'],
        answer: 0
    },
    // 국어 음운 연습문제 추가
    {
        question: '다음 단어의 뜻을 구별해 주는 요소로 알맞지 않은 것은?',
        choices: [
            '곰, 솜 - 자음',
            '종, 공 - 자음',
            '돌, 돈 - 모음',
            '산, 선 - 모음',
            '밥, 법 - 모음'
        ],
        answer: 2
    },
    {
        question: '국어의 음운에 대한 설명으로 적절하지 않은 것은?',
        choices: [
            '음운의 종류에는 자음과 모음이 있다.',
            '말의 뜻을 구별해 주는 소리의 단위이다.',
            '모음은 공기가 그대로 흘러나오는 소리이다.',
            '자음은 모음 없이 홀로 소리 낼 수 있는 음운이다.',
            '음운에 따라 소리 낼 때의 느낌이 달라질 수 있다.'
        ],
        answer: 3
    },
    {
        question: '말의 뜻을 구별해 주는 소리의 가장 작은 단위는?',
        choices: [
            '음운',
            '음절',
            '단어',
            '문장',
            '형태소'
        ],
        answer: 0
    },
    {
        question: '‘돌’의 음운 중 하나를 골라 다른 음운으로 바꾼 단어가 아닌 것은?',
        choices: [
            '솔',
            '달',
            '덕',
            '돈',
            '독'
        ],
        answer: 2
    },
    {
        question: '음운에 대한 설명으로 알맞지 않은 것은?',
        choices: [
            '단어의 음운을 바꾸어 쓰면 의미가 달라진다.',
            '우리말의 음운은 자음과 모음으로 이루어진다.',
            '자음은 공기가 방해를 받으며 나오는 소리이다.',
            '말의 뜻을 구별해 주는 소리의 가장 작은 단위이다.',
            '모음은 홀로 소리 낼 수 없어 자음을 만나야만 소리를 낼 수 있다.'
        ],
        answer: 4
    },

    {
        question: '다음 중 자음에 해당하지 않는 것은?',
        choices: ['ㄱ', 'ㅏ', 'ㅂ', 'ㅅ'],
        answer: 1
    },
    {
        question: '모음에 대한 설명으로 옳은 것은?',
        choices: [
            '공기가 방해를 받으며 나오는 소리이다.',
            '홀로 소리 낼 수 없다.',
            '자음과 함께 소리를 낸다.',
            '공기가 그대로 흘러나오는 소리이다.'
        ],
        answer: 3
    },
    {
        question: '다음 중 음운의 예가 아닌 것은?',
        choices: ['ㄴ', 'ㅏ', '단어', 'ㅅ'],
        answer: 2
    },
    // 추가 문제.txt 기반 문제 추가
    {
        question: '단어에 사용된 음운의 개수가 잘못 연결된 것은?',
        choices: [
            '누나 - 4개',
            '까꿍 - 6개',
            '동생 - 6개',
            '외삼촌 - 7개',
            '할머니 - 7개'
        ],
        answer: 4,
        image: 'images/01.png'
    },
    {
        question: '다음 중 국어의 자음에 대한 설명으로 적절하지 않은 것은?',
        choices: [
            '자음의 개수는 모두 19개이다.',
            '모음을 만나야 소리 낼 수 있다.',
            '공기가 방해를 받으며 나오는 소리이다.',
            '입안의 공명 현상을 거쳐서 나온다는 특징이 있다.',
            '말의 뜻을 구별해 주는 소리의 가장 작은 단위에 속한다.'
        ],
        answer: 3,
        image: 'images/02.png'
    }
];


let current = 0;
let score = 0;
let wrongIndexes = [];
let isRetryMode = false;
let retryData = [];


const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextBtn = document.getElementById('next-btn');
const resultBox = document.getElementById('result-box');
const quizBox = document.getElementById('quiz-box');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

// 틀린 문제 다시 풀기 버튼 생성
let retryBtn = document.getElementById('retry-btn');
if (!retryBtn) {
    retryBtn = document.createElement('button');
    retryBtn.id = 'retry-btn';
    retryBtn.textContent = '틀린 문제 다시 풀기';
    retryBtn.style.display = 'none';
    resultBox.appendChild(retryBtn);
}

function showQuestion(idx) {
    let q;
    if (isRetryMode) {
        q = retryData[idx];
    } else {
        q = quizData[idx];
    }
    // 문제 텍스트 표시
    questionEl.innerHTML = '';
    // 이미지가 있으면 추가
    if (q.image) {
        const img = document.createElement('img');
        img.src = q.image;
        img.alt = '문제 그림';
        img.style.maxWidth = '100%';
        img.style.display = 'block';
        img.style.margin = '0 auto 16px auto';
        questionEl.appendChild(img);
    }
    // 문제 텍스트
    const text = document.createElement('div');
    text.textContent = q.question;
    questionEl.appendChild(text);
    choicesEl.innerHTML = '';
    q.choices.forEach((choice, i) => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.onclick = () => selectAnswer(i);
        const li = document.createElement('li');
        li.appendChild(btn);
        choicesEl.appendChild(li);
    });
    nextBtn.disabled = true;
}

function selectAnswer(selected) {
    let correct;
    if (isRetryMode) {
        correct = retryData[current].answer;
    } else {
        correct = quizData[current].answer;
    }
    Array.from(choicesEl.querySelectorAll('button')).forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) btn.style.background = '#00b894';
        if (i === selected && i !== correct) btn.style.background = '#d63031';
    });
    if (selected === correct) {
        score++;
    } else {
        if (isRetryMode) {
            wrongIndexes.push(current);
        } else {
            wrongIndexes.push(current);
        }
    }
    nextBtn.disabled = false;
}

nextBtn.onclick = () => {
    current++;
    if (isRetryMode) {
        if (current < retryData.length) {
            showQuestion(current);
        } else {
            showResult(true);
        }
    } else {
        if (current < quizData.length) {
            showQuestion(current);
        } else {
            showResult();
        }
    }
};

function showResult(isRetry = false) {
    quizBox.style.display = 'none';
    resultBox.style.display = 'block';
    if (isRetry) {
        scoreEl.textContent = `틀린 문제 ${retryData.length}개 중 ${score}개 맞춤!`;
        retryBtn.style.display = 'none';
    } else {
        scoreEl.textContent = `총 ${quizData.length}문제 중 ${score}문제 맞춤!`;
        if (wrongIndexes.length > 0) {
            retryBtn.style.display = 'block';
        } else {
            retryBtn.style.display = 'none';
        }
    }
}


restartBtn.onclick = () => {
    current = 0;
    score = 0;
    wrongIndexes = [];
    isRetryMode = false;
    retryData = [];
    quizBox.style.display = 'block';
    resultBox.style.display = 'none';
    retryBtn.style.display = 'none';
    showQuestion(current);
};

retryBtn.onclick = () => {
    if (wrongIndexes.length === 0) return;
    retryData = wrongIndexes.map(idx => quizData[idx]);
    current = 0;
    score = 0;
    wrongIndexes = [];
    isRetryMode = true;
    quizBox.style.display = 'block';
    resultBox.style.display = 'none';
    retryBtn.style.display = 'none';
    showQuestion(current);
};


// 첫 문제 표시
showQuestion(current);
