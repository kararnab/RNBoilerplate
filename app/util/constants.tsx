export const ActionTypes = {
    CLEAR_ALL: "CLEAR_ALL",
    UPDATE_USER: "UPDATE_USER",
    UPDATE_APP: "UPDATE_APP",
    UNREAD_CHAT: "UNREAD_CHAT"
}

export const StorageKeys = {
    USER: "USER"
}

export const Fonts = {
    Bold: 'Roboto-Bold',
    Regular: 'Roboto-Regular',
    RegularItalic: 'Roboto-Italic',
    Medium: 'Roboto-Medium',
    MediumItalic: 'Roboto-MediumItalic',
    Light: 'Roboto-Light',
    LightItalic: 'Roboto-LightItalic',
    Thin: 'Roboto-Thin',
    ThinItalic: 'Roboto-ThinItalic',
    Size: {
        ExtraSmall: 11,
        Small: 12,
        Normal: 14,
        Large: 16,
        XL: 18,
        XXL: 22,
        XXXL: 26
    },
}

export class Constants {

    static _baseUrl = '';

    static getBaseUrl() {
        return 'https://s3-ap-southeast-1.amazonaws.com/he-public-data'
        //   if (!this._baseUrl) {
        //     return Config.BASE_URL;
        //   } else {
        //     return this._baseUrl;
        //   }
    }

    // static setBaseUrl(baseUrl) {
    //   this._baseUrl = baseUrl;
    // }

    static isFeature1Enabled() {
        return true;
    }
}