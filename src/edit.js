/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
    BlockEditorProvider,
    BlockList,
    BlockEdit,
    BlockTools,
    WritingFlow,
    ObserveTyping,
    useBlockProps,
    RichText,
    BlockControls,
    BlockAlignmentToolbar,
    InspectorControls,
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';
import {
  SlotFillProvider,
  Popover,
  Panelbody,
  TextControl,
  TextareaControl,
  Button,
  SelectControl,
  PanelBody,
  InnerBlocks,
  Dashicon,
  Toolbar,
  ToolbarButton,
  __experimentalBlockAlignmentMatrixToolbar as BlockAlignmentMatrixToolbar,
} from '@wordpress/components';
import { useState,Fragment } from '@wordpress/element';
import React from 'react';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
  const [ text, setText ] = useState( '' );
  const {className, attributes, setAttributes} = props;
  const {image} = attributes;
  return(

    <div className={className} {...useBlockProps()}>
     <InspectorControls>...</InspectorControls>
      <BlockControls></BlockControls>
              <div className="wp-block-image-selector">
                  <RichText
          					tagName="p"
          					placeholder="First Name / Last Name"
          					value={attributes.firstname}
          					onChange={(firstname) => setAttributes({ firstname: firstname })}
          				/>
                  <TextareaControl
                  	label="Short description"
                    rows={2}
                  	value={ attributes.sdescription ? attributes.sdescription : ''}
                    onChange= {
                      (sdescription) => {
                        setAttributes({ sdescription: sdescription });
                        setText( sdescription )
                      }
                    }
                  />
                  <SelectControl
                      label="Position in the company"
                      value={attributes.Pcompany}
                      options={[
                        {label: "CEO", value: 'CEO'},
                        {label: "Project Manager", value: 'Project Manager'},
                        {label: "Developer", value: 'Developer'},
                      ]}
                      onChange={(Pcompany) => setAttributes({ Pcompany: Pcompany })}
                    />
                    <SelectControl
                      label="Social Network Links"
                      value={attributes.snlinks}
                      options={[
                        {label:"GitHub",value:'GitHub'},
                        {label:"LinkedIn",value:'LinkedIn'},
                        {label:"Xing", value:'Xing'},
                        {label:"Facebook", value:'Facebook'}
                      ]}
                      onChange={(snlinks) => setAttributes({ snlinks: snlinks})}
                      />
                        <MediaUploadCheck>
                        <MediaUpload
                          className={className}
                          allowedTypes={['image']}
                          value={image ? image.id : ''}
                          onSelect={image => setAttributes({image:image})}
                          multiple={false}
                          render={({open})=>(
                            image ?
                            <div>
                            <p>
                            <img src={image.url} width={image.width/2} />
                            </p>
                            <p>
                            <Button onClick={()=>setAttributes({image:''})} className="button is-small">Remove</Button>
                            </p>
                            </div> :
                            <Button onClick={open} className="button">Upload Image</Button>
                          )}
                        />
                        </MediaUploadCheck>
                  </div>
      </div>
  );
}
