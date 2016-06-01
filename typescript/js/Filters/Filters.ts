module IonicGreen.Filter {
    export function truncate() {
        return (str: string, length: number, end: string) => {
            if (isNaN(length)) return str;
            if (length <= 0) return '';
            if (typeof str == "undefined") {
                str = '';
            }
            str = String(str).replace(/<[^>]+>/gm, '');
            if (length > 1000) return str;
            if (str && str.length > length) {
                str = str.substring(0, length);
                let lastspace = str.lastIndexOf(' ');
                if (lastspace !== -1) {
                    str = str.substr(0, lastspace);
                }
                if (typeof end === "undefined") { end = "..."; }
                return str + end;
            }
            return str;
        }
    }

    export function characters() {
        return (str: string, chars: number, breakOnWord: boolean) => {
            if (isNaN(chars)) return str;
            if (chars <= 0) return '';
            if (str && str.length > chars) {
                str = String(str).replace(/<[^>]+>/gm, '');
                str = str.substring(0, chars);

                if (!breakOnWord) {
                    let lastspace = str.lastIndexOf(' ');
                    if (lastspace !== -1) {
                        str = str.substr(0, lastspace);
                    }
                } else {
                    while (str.charAt(str.length - 1) === ' ') {
                        str = str.substr(0, str.length - 1);
                    }
                }
                return str + '...';
            }
            return str;
        }
    }

    export function splitCharacters() {
        return (str: string, chars: number) => {
            if (isNaN(chars)) return str;
            if (chars <= 0) return '';
            if (str && str.length > chars) {
                str = String(str).replace(/<[^>]+>/gm, '');
                let prefix = str.substring(0, chars / 2);
                let postfix = str.substring(str.length - chars / 2, str.length);
                return prefix + '...' + postfix;
            }
            return str;
        }
    }

    export function words() {
        return (str: string, words: number) => {
            if (isNaN(words)) return str;
            if (words <= 0) return '';
            if (str) {
                str = String(str).replace(/<[^>]+>/gm, '');
                let strWords = str.split(/\s+/);
                if (strWords.length > words) {
                    str = strWords.slice(0, words).join(' ') + '...';
                }
            }
            return str;
        }
    }

    export function getUrl() {
        return (str: string) => {
            let regexp = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/gi;
            if (!str) return str;
            var match = str.match(regexp);
            if (match) {
                return match[0];
            } else {
                return "";
            }
        }
    }

    export function escapeHtml() {
        return (str: string) => {
            if (!angular.isDefined(str)) return "";
            return String(str).replace(/&Prime;/g, '"').replace(/&prime;/g, "'").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
    }

    export function stripTags() {
        return (str: string, allowed: string) => {
            str = str || "";
            // str = str.replace(/&nbsp;/g," ");
            allowed = (((allowed || '') + '')
                .toLowerCase()
                .match(/<[a-z][a-z0-9]*>/g) || [])
                .join('');
            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return str.replace(commentsAndPhpTags, '')
                .replace(tags, function($0, $1) {
                    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
                });
        }
    }

    export function wordsLength() {
        return (str: string) => {
            if (str) {
                var s = str ? str.trim().split(/\s+/) : str;
                return s ? s.length : '';
            } else {
                return 0
            }
        }
    }

    export function textareaLength() {
        return (str: string) => {
            if (str) {
                str = str.trim();
                let newLines = str.match(/(\r\n|\n|\r)/g);
                var addition = 0;
                if (newLines != null) {
                    addition = newLines.length;
                }
                return str.length + addition;
            }
        }
    }

    angular.module('IonicGreen')
        .filter('truncate', IonicGreen.Filter.truncate)
        .filter('characters', IonicGreen.Filter.characters)
        .filter('splitCharacters', IonicGreen.Filter.splitCharacters)
        .filter('words', IonicGreen.Filter.words)
        .filter('getUrl', IonicGreen.Filter.getUrl)
        .filter('escapeHtml', IonicGreen.Filter.escapeHtml)
        .filter('stripTags', IonicGreen.Filter.stripTags)
        .filter('wordsLength', IonicGreen.Filter.wordsLength)
        .filter('textareaLength', IonicGreen.Filter.textareaLength)
}
