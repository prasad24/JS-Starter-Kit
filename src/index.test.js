import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', function() {
    it('should pass', function() {
        expect(true).to.equal(true);
    });
});


describe('index.html', function() {
    it('should contain test hello', function(done) {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            //console.log(h1.innerHTML);
            expect(h1.innerHTML).to.equal("Hello World!");
            done(); //this is important for all async calls. if we don't do this the test and will always pass.
            window.close();
        });
    });
});
