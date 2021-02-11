class Formatter {
  //add static methods here

  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    let lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newString = string.split(" ").map(word => {
      let filter = lowerCaseWords.find(element => element === word)
      if (!!filter && filter !== string[0]){
        word = word
      } else {
        word = word.charAt(0).toUpperCase() + word.slice(1)
      }
      return word
    })
    return newString.join(" ")
  }
}