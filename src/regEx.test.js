
describe("Match regEx value", ()=>{

    // “/” forward slash indicates the start and the end of the pattern.
    // “^” represents the start of the number.
    // “d” denotes digits.
    // “{}” indicates the limit that is “10”.
    // “\” backslash character is the escape character.
    // “$” indicates the end of the pattern string.

    test ("Match number_regEx and string value", ()=>{
        let regex = /^\d{10}$/;
        let str = '090078601';
        let result = regex.test(str);
        console.log(result);
    })

    test ("Match string_regEx and string value", ()=>{
        let regex = /Hello/;
        let str = 'Hello world';
        let result = regex.test(str);
        console.log(result);
    })

    test ("Verify Global Search and Case-insensitive search", ()=>{
        //g: Global search, don’t return after the first match.
        //i: Case-insensitive search
        let regex = /abc/g;
        console.log(regex.test('abc abc'));
        let regex1 = /abc/i;
        console.log(regex1.test('Abc'));
    })

    test ("Verify Character Set, Negated Character Set, Ranges [a-z], ", ()=>{
        //Character Set
        var regex = /[bt]ear/;
        console.log(regex.test('tear'));
        // returns true
        console.log(regex.test('bear'));
        // return true
        console.log(regex.test('fear'));
        // return false

        //Negated Character Set
        var regex = /[^bt]ear/;
        console.log(regex.test('tear'));
        // returns false
        console.log(regex.test('bear'));
        // return false
        console.log(regex.test('fear'));
        // return true

        //Ranges [a-z]
        var regex = /[a-z]ear/;
        console.log(regex.test('fear'));
        // returns true
        console.log(regex.test('tear'));
        // returns true
    })
    
    test ("Verify Meta-Characters", ()=>{

        // \d: Match any digit character (same as [0-9] ).
        // \w: Match any word character. A word character is any letter, digit and underscore. This is the ame as [a-zA-Z0–9_] , i.e alphanumeric characters.
        // \s: Match a whitespace character (spaces, tabs etc).
        // \t: Match a tab character only.
        // \b: Find a match at the beginning or ending of a word. Also known as a word boundary.
        // . (period): Matches any character except for newline.
        // \D: Match any non-digit character. This is the same as [^0–9].
        // \W: Match any non-word character. This is the same as [^a-zA-Z0–9_].
        // \S: Match a non-whitespace character.
        // +: Matches the preceding expression one or more times.
        var regex = /\d+/;
        console.log(regex.test('8'));
        // true
        console.log(regex.test('88899'));
        // true
        console.log(regex.test('8888845'));
        // true
        
        // *: Matches the preceding expression zero or more time
        var regex = /go*d/;
        console.log(regex.test('gd'));
        // true
        console.log(regex.test('god'));
        // true
        console.log(regex.test('good'));
        // true
        console.log(regex.test('goood'));
        // true

        // ?: Matches the preceding expression zero or one time, that is the preceding pattern is optional.
        var regex = /goo?d/;
        console.log(regex.test('god'));
        // true
        console.log(regex.test('good'));
        // true
        console.log(regex.test('goood'));
        // false


        // ^: Matches the beginning of the string, the regular expression that follows it should be at the start of the test string, i.e the caret (^) matches the start of the string.
        var regex = /^g/;
        console.log(regex.test('good'));
        // true
        console.log(regex.test('bad'));
        // false
        console.log(regex.test('tag'));
        // false

        // $: Matches the end of the string. That is, the regular expression that precedes it should be at the end of the test string. The dollar ($) sign matches the end of the string.
        var regex = /.com$/;
        console.log(regex.test('test@testmail.com'));
        // true
        console.log(regex.test('test@testmail'));
        // false
                
        // {N}: Matches exactly N occurrences of the preceding regular expression.
        var regex = /go{2}d/;
        console.log(regex.test('good'));
        // true
        console.log(regex.test('god'));
        // false

        // {N,M}: Matches at least N occurrences and at most M occurrences of the preceding regular expression,where M > N.
        var regex = /go{1,2}d/;
        console.log(regex.test('god'));
        // true
        console.log(regex.test('good'));
        // true
        console.log(regex.test('goood'));
        // false
        
        // Alternation X|Y: Matches either X or Y. For example:
        var regex = /(green|red) apple/;
        console.log(regex.test('green apple'));
        // true
        console.log(regex.test('red apple'));
        // true
        console.log(regex.test('blue apple'));
        // false
    })

})