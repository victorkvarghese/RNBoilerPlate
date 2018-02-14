/* class combines all the existing reducers in the app
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';

import nav from './nav';

export default Object.assign(loadingReducer, loginReducer, { nav });
