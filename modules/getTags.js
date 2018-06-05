const getHashTags = require("./hashtag");

function getTags(inputText) {
    const hashTags = getHashTags(inputText);
    if(hashTags.length > 0){
        return hashTags;
    }
    return inputText && inputText.split(" ").filter((tag)=>{ return tag && tag.charAt(0) !== '#'}) || [];
}

module.exports = getTags;