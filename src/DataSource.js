
export const pollData = {

    "Poll1": {
      title: "BasicNeeds",
      categories: [
        {
          categoryName: "Security",
          statements: [
            {statement: "If my partner wants to spend time with me all the time, it becomes „too tight“ for me", value: "-1", picked: "0"},
            {statement: "Being with the same people all the time can be „too much“ for me as well", value: "-1", picked: "0"},
            {statement: "Belonging is very important to me", value: "1", picked: "0"},
            {statement: "It would be terryfing for me if I get very sick on vacation and no one I know is with me", value: "1", picked: "0"},
            {statement: "I feel uncomfortable when I don't have familiar people around me for a long time", value: "1", picked: "0"},
            {statement: "In a new professional environment, I really appreciate a familiar colleague", value: "1", picked: "0"},
            {statement: "I need familiar people around me", value: "1", picked: "0"},
          ]
        },
        
      {
        categoryName: "Adventure",
        statements: [
          {statement: "I like to have a familiar daily routine", value: "-1", picked: "0"},
          {statement: "In a completely foreign environment I become insecure", value: "-1", picked: "0"},
          {statement: "I get bored very quickly if I do not have a varied activity", value: "1", picked: "0"},
          {statement: "I am constantly looking for new experiences", value: "1", picked: "0"},
          {statement: "I love the thrill", value: "1", picked: "0"},
          {statement: "I often need quiet times when I do not do anything", value: "-1", picked: "0"},
          {statement: "I prefer familiar situations to new ones", value: "1", picked: "0"},
        ]
    },
    {
        categoryName: "Autonomy",
        statements: [
          {statement: "In important situations, it is best that I lead", value: "1", picked: "0"},
          {statement: "I overrule decisions that have already been made", value: "1", picked: "0"},
          {statement: "I enjoy motivating others in a targeted direction", value: "1", picked: "0"},
          {statement: "Beeing famous would be great", value: "1", picked: "0"},
          {statement: "Advancing in my Career is key", value: "1", picked: "0"},
          {statement: "I love mastering a skill", value: "1", picked: "0"},
          {statement: "I have high expectations of myself", value: "1", picked: "0"},
        ]
    },
    ]
    }
  
    

};
export function pickedHandler(categoryIndex, statementIndex) 
    
  {

    console.log(pollData.Poll1.categories[categoryIndex].statements[statementIndex].picked);
    console.log("Its activated");
    if (pollData.Poll1.categories[categoryIndex].statements[statementIndex].picked == 0) {

      pollData.Poll1.categories[categoryIndex].statements[statementIndex].picked = 1;
    } else {
      pollData.Poll1.categories[categoryIndex].statements[statementIndex].picked = 0;
    }    
  };


  
