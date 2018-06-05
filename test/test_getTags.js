let chai = require('chai');
let expect = chai.expect; // we are using the "expect" style of Chai
const getTags = require('../modules/getTags');
let spies = require('chai-spies');
let chaiAsPromised = require("chai-as-promised");

chai.use(spies);
chai.use(chaiAsPromised);

describe('tags recognition', function() {
    it('should find nothing in an null text', function() {
        expect(getTags(null)).to.eqls([]);
    });

    it('should find nothing in an undefined text', function() {
        expect(getTags()).to.eqls([]);
    });

    it('should find nothing in an empty text', function() {
        expect(getTags("")).to.eqls([]);
    });

    it('should find when there is no hashtags', function() {
        expect(getTags("there is four tags")).to.eqls(["there","is","four","tags"]);
    });

    it('should find a simple tag', function() {
        expect(getTags("#atag")).to.eqls(["atag"]);
    });

    it('should find a tag with having a "_" character', function() {
        expect(getTags("#a_tag")).to.eqls(["a_tag"]);
    });

    it('should exclude a tag containing only the "_" character', function() {
        expect(getTags("This should exclude the tag #___")).to.eqls(["This","should","exclude","the","tag"]);
    });

    it('should exclude a tag containing only the "-" character', function() {
        expect(getTags("This should exclude the tag #---")).to.eqls(["This","should","exclude","the","tag"]);
    });

    it('should exclude a tag containing only numerical characters', function() {
        expect(getTags("This should exclude the tag #123")).to.eqls(["This","should","exclude","the","tag"]);
    });

    it('should find a tag with having a "-" character', function() {
        expect(getTags("#a-tag")).to.eqls(["a-tag"]);
    });

    it('should find several tags', function() {
        expect(getTags("#a-tag and a second #tag")).to.eqls(["a-tag", "tag"]);
    });
});