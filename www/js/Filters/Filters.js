var IonicGreen;
(function (IonicGreen) {
    var Filter;
    (function (Filter) {
        function truncate() {
            return function (str, length, end) {
                if (isNaN(length))
                    return str;
                if (length <= 0)
                    return '';
                if (typeof str == "undefined") {
                    str = '';
                }
                str = String(str).replace(/<[^>]+>/gm, '');
                if (length > 1000)
                    return str;
                if (str && str.length > length) {
                    str = str.substring(0, length);
                    var lastspace = str.lastIndexOf(' ');
                    if (lastspace !== -1) {
                        str = str.substr(0, lastspace);
                    }
                    if (typeof end === "undefined") {
                        end = "...";
                    }
                    return str + end;
                }
                return str;
            };
        }
        Filter.truncate = truncate;
        function characters() {
            return function (str, chars, breakOnWord) {
                if (isNaN(chars))
                    return str;
                if (chars <= 0)
                    return '';
                if (str && str.length > chars) {
                    str = String(str).replace(/<[^>]+>/gm, '');
                    str = str.substring(0, chars);
                    if (!breakOnWord) {
                        var lastspace = str.lastIndexOf(' ');
                        if (lastspace !== -1) {
                            str = str.substr(0, lastspace);
                        }
                    }
                    else {
                        while (str.charAt(str.length - 1) === ' ') {
                            str = str.substr(0, str.length - 1);
                        }
                    }
                    return str + '...';
                }
                return str;
            };
        }
        Filter.characters = characters;
        function splitCharacters() {
            return function (str, chars) {
                if (isNaN(chars))
                    return str;
                if (chars <= 0)
                    return '';
                if (str && str.length > chars) {
                    str = String(str).replace(/<[^>]+>/gm, '');
                    var prefix = str.substring(0, chars / 2);
                    var postfix = str.substring(str.length - chars / 2, str.length);
                    return prefix + '...' + postfix;
                }
                return str;
            };
        }
        Filter.splitCharacters = splitCharacters;
        function words() {
            return function (str, words) {
                if (isNaN(words))
                    return str;
                if (words <= 0)
                    return '';
                if (str) {
                    str = String(str).replace(/<[^>]+>/gm, '');
                    var strWords = str.split(/\s+/);
                    if (strWords.length > words) {
                        str = strWords.slice(0, words).join(' ') + '...';
                    }
                }
                return str;
            };
        }
        Filter.words = words;
        function getUrl() {
            return function (str) {
                var regexp = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/gi;
                if (!str)
                    return str;
                var match = str.match(regexp);
                if (match) {
                    return match[0];
                }
                else {
                    return "";
                }
            };
        }
        Filter.getUrl = getUrl;
        function escapeHtml() {
            return function (str) {
                if (!angular.isDefined(str))
                    return "";
                return String(str).replace(/&Prime;/g, '"').replace(/&prime;/g, "'").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            };
        }
        Filter.escapeHtml = escapeHtml;
        function stripTags() {
            return function (str, allowed) {
                str = str || "";
                // str = str.replace(/&nbsp;/g," ");
                allowed = (((allowed || '') + '')
                    .toLowerCase()
                    .match(/<[a-z][a-z0-9]*>/g) || [])
                    .join('');
                var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
                return str.replace(commentsAndPhpTags, '')
                    .replace(tags, function ($0, $1) {
                    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
                });
            };
        }
        Filter.stripTags = stripTags;
        function wordsLength() {
            return function (str) {
                if (str) {
                    var s = str ? str.trim().split(/\s+/) : str;
                    return s ? s.length : '';
                }
                else {
                    return 0;
                }
            };
        }
        Filter.wordsLength = wordsLength;
        function textareaLength() {
            return function (str) {
                if (str) {
                    str = str.trim();
                    var newLines = str.match(/(\r\n|\n|\r)/g);
                    var addition = 0;
                    if (newLines != null) {
                        addition = newLines.length;
                    }
                    return str.length + addition;
                }
            };
        }
        Filter.textareaLength = textareaLength;
        angular.module('IonicGreen')
            .filter('truncate', IonicGreen.Filter.truncate)
            .filter('characters', IonicGreen.Filter.characters)
            .filter('splitCharacters', IonicGreen.Filter.splitCharacters)
            .filter('words', IonicGreen.Filter.words)
            .filter('getUrl', IonicGreen.Filter.getUrl)
            .filter('escapeHtml', IonicGreen.Filter.escapeHtml)
            .filter('stripTags', IonicGreen.Filter.stripTags)
            .filter('wordsLength', IonicGreen.Filter.wordsLength)
            .filter('textareaLength', IonicGreen.Filter.textareaLength);
    })(Filter = IonicGreen.Filter || (IonicGreen.Filter = {}));
})(IonicGreen || (IonicGreen = {}));
