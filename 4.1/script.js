const randomIndex = (number) => Math.floor(Math.random() * number)


const students = {
  studentsInfo: [
    {
      picture: "imagens/cadu.png",
      trybe: "CH37",
      studentName: "Cadu",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "imagens/jlo.png",
      trybe: "CH37",
      studentName: "JLO",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "imagens/nat.png",
      trybe: "CH37",
      studentName: "Nat",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "imagens/luquinha.png",
      trybe: "CH37",
      studentName: "Luquinha",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "imagens/will.png",
      trybe: "CH37",
      studentName: "Will",
      projectLessonsLearned: 5, 
      projectPirilampo: 45,
      projectPixelsArt: 40,
    },
    {
      picture: "imagens/rods.png",
      trybe: "CH37",
      studentName: "Rods",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "imagens/vic.png",
      trybe: "CH37",
      studentName: "Vic",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
  ]
}

// Localizar os elementos
const picture = document.getElementById('picture');
// const studentName = document.getElementsByClassName('name')[0];
const studentName = document.querySelector('.name');
const gradeLessonsLearned = document.getElementById('gradeLessonsLearned');
const gradePirilampo = document.getElementById('gradePirilampo');
const gradePixelsArt = document.getElementById('gradePixelsArt');
const results = document.getElementById('results');


// atribução
const getStudentInfo = () => {
  const array = students.studentsInfo
  const number = randomIndex(array.length)
  
  picture.src=array[number].picture;
  studentName.innerText = array[number].studentName;
  gradeLessonsLearned.innerText = array[number].projectLessonsLearned;
  gradePirilampo.innerText = array[number].projectPirilampo;
  gradePixelsArt.innerText = array[number].projectPixelsArt;
}

getStudentInfo();

// nota final
const finalGrade = () => {
  const sum = parseInt(gradeLessonsLearned.innerText) + parseInt(gradePirilampo.innerText) + parseInt(gradePixelsArt.innerText);
  
  if (sum < 85) {
    results.innerText = `${sum} - Sinto muito, tente outra vez`;
    results.className = 'reprovada';
    return;
  }

  results.innerText = `${sum} - Meus Parabéns, você foi aprovado`;
  results.className = 'aprovada';
}

finalGrade();

const nextButton = document.getElementById('nextStudent');

nextButton.addEventListener('click', () => {
  getStudentInfo();
})

// botão

console.log(students);