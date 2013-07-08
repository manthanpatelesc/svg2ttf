'use strict';

// See documentation here: http://www.microsoft.com/typography/otspec/head.htm

var jDataView = require('jDataView');

function dateToUInt64(date) {
  var startDate = new Date(1904, 1, 1);
  return date - startDate;
}

function createHeadTable(font) {

  var buf = new jDataView(54); // fixed table length

  buf.writeInt32(0x10000); // version
  buf.writeInt32(0); // fontRevision
  buf.writeUint32(0); // checkSumAdjustment
  buf.writeUint32(0x5F0F3CF5); // magicNumber
  buf.writeUint16(0x1011); // flags
  buf.writeUint16(font.unitsPerEm); // unitsPerEm
  buf.writeUint64(dateToUInt64(font.createdDate)); // created
  buf.writeUint64(dateToUInt64(font.modifiedDate)); // modified
  buf.writeInt16(font.xMin); // xMin
  buf.writeInt16(font.yMin); // yMin
  buf.writeInt16(font.xMax); // xMax
  buf.writeInt16(font.yMax); // yMax
  buf.writeUint16(font.macStyle); //macStyle
  buf.writeUint16(font.lowestRecPPEM); // lowestRecPPEM
  buf.writeInt16(2); // fontDirectionHint
  buf.writeInt16(1); // indexToLocFormat
  buf.writeInt16(0); // glyphDataFormat

  return buf;
}

module.exports = createHeadTable;