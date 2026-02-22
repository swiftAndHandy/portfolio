export class StringUtils {
    static cleanStr(str: string): string {
        const strResult = this.removeDiacritics(str);
        return strResult.split(' ').join('-').toLowerCase();
    }

    static removeDiacritics(str: string): string {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
}