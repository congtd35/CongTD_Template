/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';
import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../../i18n';

export const initialState = {
    locale: DEFAULT_LOCALE,
};
const languageProviderReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case CHANGE_LOCALE:
                console.log('reducer', action.locale);
                draft.locale = action.locale;
                break;
        }
    });

export default languageProviderReducer;
