/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

import {BlockControls,MediaUpload} from '@wordpress/block-editor';
import {ToolbarButton, ToolbarGroup, Dashicon} from '@wordpress/components';
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/jbipsd', {
  attributes:{
    align: {
			type: "string",
			default: "center center"
		},
		textAlign: {
			type: "string",
			default: "left"
		},
    image: {
       type: 'object',
       default: '',
    },
    Pcompany:{
      type: 'string',
      default: ''
    },
    firstname:{
      type: 'string',
      default: ''
    },
    sdescription:{
      type: 'string',
      default: ''
    },
    snlinks:{
      type: 'string',
      default: ''
    },
    selector: 'p',
    backroundImage: { // < typo, correct to 'backgroundImage'
       type: 'string',
       default: null
   },
   content: {
             type: 'string',
             source:'html',
             selector: 'div',
         }
  },
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: Save,
});
