$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var sentence = $("#one").val();
    var words = sentence.split(/[,\s.!?]/).filter(Boolean);

    var bigWords = [];
    words.forEach(function(word) {
      if(word.length>3)
      {
        bigWords.push(word);
      }
    });

    bigWords = bigWords.reverse();
    var newSentence = bigWords.join(" ");
    $("#output").text(newSentence);

  });
});
    // / means start and end of regular expression
   // \s means tab or space => blank part of a string
   // [] means if a word has a comma or white space, it will be matched
   //Therefore, /[,\s]/ will find space or comma
   //and a regular expression inside parenthesis is used to find separator
   //Thus, array words will be words separated by space or comma
//
//    $("#output").text(words);
//
//
//
//
//
//   });
//
//
//
// });
