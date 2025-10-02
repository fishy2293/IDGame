async function getRandomQuestion() {
  try {
    // Fetch the CSV file (make sure it's in the same folder or adjust path)
    const response = await fetch('questions.csv');

    const text = await response.text();

    // Split CSV into array of rows
    const questions = text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== "");

    // Pick a random question
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const questionTwo = questions[Math.floor(Math.random() * questions.length)];
    const questionThree = questions[Math.floor(Math.random() * questions.length)];

    document.getElementById('main-question').textContent = randomQuestion;
    document.getElementById('question-2').textContent = questionTwo;
    document.getElementById('question-3').textContent = questionThree;


  } catch (err) {
    console.error(err);
    console.log("Error loading questions");
    // document.getElementById('result').textContent = "Error loading questions";
  }
}

