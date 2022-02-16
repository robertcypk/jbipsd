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
     MediaUploadCheck,
     InnerBlocks
 } from '@wordpress/block-editor';
 import { SlotFillProvider, Popover, Panelbody, TextControl, TextareaControl, Button} from '@wordpress/components';
 import { useState,Fragment } from '@wordpress/element';
 import React from 'react';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function Save(props){
  const blockProps = useBlockProps.save();
  const {className, attributes, setAttributes, content} = props;
  const {image} = attributes;
  return (
    <div className={className} id="saved-content" {...blockProps}>
      <div className="wp-block-image-selector">
      <p>First Name / Last Name: { attributes.firstname ? attributes.firstname : ''}</p>
      <p>{ image ? <img src={image.url} width={image.width/3} /> : ''}</p>
      <p>Position in the company: { attributes.Pcompany ? attributes.Pcompany : ''}</p>
      <p>{ attributes.sdescription ? attributes.sdescription : ''}</p>
      <p>Social Network Links: { attributes.snlinks ? attributes.snlinks : ''}</p>
    </div>
  </div>);
}
