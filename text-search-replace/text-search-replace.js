import MagicString from 'magic-string';

export const escapeRegExp = x => x.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

// Reads the find instruction and returns the regex
export const parseFind = (find) => find instanceof RegExp
   ? new RegExp(find, find.flags + (find.flags.includes('g') ? '' : 'g'))
   : [find.match(/^\/(.*)\/([yumgis]*)$/)].map((regex) => regex
    ? new RegExp(regex[1], regex[2] + (regex[2].includes('g') ? '' : 'g'))
    : new RegExp(escapeRegExp(find), 'g')).find(result=>result);

// RegExBased Modifyer
export const modify = ({find, replace, sourcemap = true, ...rest}) => {
  const modifiers = [[find, replace], ...Object.entries(rest)]
    .filter(x => x[0])
    .map(([find, replace]) => [
      parseFind(find), replace 
    ]);

  return { name: 'modify', transform: (source, /** _id */) => {
      if (modifiers.every(x => !x[0].test(source))) {
        return;
      }
      // MagicString maintains and creates sourceMaps
      const code = new MagicString(source);

      modifiers.forEach(([find, replace]) => {
        find.lastIndex = 0;
        const searchTask = {};
        while ((searchTask.match = find.exec(source)) !== null) {
          code.overwrite(searchTask.match.index, 
            searchTask.match.index + searchTask.match[0].length,
            replace.call ? replace(...match) : String(replace)
          );
        }

        return code;
      });

      return { code: `${code}`, map: sourcemap ? code.generateMap() : null };
    }
  };
};
