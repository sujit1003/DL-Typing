export default () => {

    const texts = [
      "Here's to the crazy ones. The misfits. The rebels. The troublemakers."
      + " The round pegs in the square holes. The ones who see things differently."
      + " They're not fond of rules. And they have no respect for the status quo."
      + " You can quote them, disagree with them, glorify or vilify them. About the only thing"
      + " you can't do is ignore them. Because they change things. They push the human race forward. And"
      + " while some may see them as the crazy ones, we see genius. Because the people who are crazy"
      + " enough to think they can change the world, are the ones who do.",
  
      "I believe that everything happens for a reason. People change so that you can learn to let go,"
      + " things go wrong so that you appreciate them when they're right, you believe lies so you eventually"
      + " learn to trust no one but yourself, and sometimes"
      + " good things fall apart so better things can fall together.",
  
      "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If"
      + " you want to make sure of keeping it intact you must give it to no one, not even an animal."
      + " Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe"
      + " in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless"
      + " will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable."
      + " To love is to be vulnerable",

      "Word-prediction is a software programe which operates within a word pro-"
      +"cessing programe during the typing process. As soon as a user begins to"
      +"type a new word, a word list menu is filled with possible words that match the"
      +"typed letter or letters. If the user selects one of the suggested words (through"
      +"a mouse click or the relevant coded function key on the keyboard), that word"
      +"is inserted into the text, and the user can proceed to type the next word. The"
      +"essence of the spelling support offered by word-prediction appears to be that"
      +"the spelling skill of encoding words letter by letter is being replaced by the"
      +"possibility of selecting the word rather than forming the word. A spelling task"
      +"becomes a spelling and sight word reading task, where there is a continual"
      +" interplay between reading and writing skills."
      

    ];
    
    return texts[Math.floor(Math.random()*texts.length)];
  
  }