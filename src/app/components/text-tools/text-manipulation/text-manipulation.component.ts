import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../services/meta.service';
import { InfoService } from './info.service';

@Component({
  selector: 'app-text-manipulation',
  templateUrl: './text-manipulation.component.html',
  styleUrls: ['./text-manipulation.component.scss','../../container.scss'],
  providers: [InfoService]
})
export class TextManipulationComponent {
  text: string = '';
  storageKey = 'textManipulation'
  originalText = '';
  executeFn: any = () => { };
  columnWidth: number = 1;
  textRouterCount: number = 1;
  repetitions: number = 2;
  replacement: string = '';
  search: string = '';

  readonly buttonMappings: { [key: string]: any } = {
    'text-reverser': this.textReverser,
    'text-randomization': this.textRandomization,
    'text-sorting': this.textSorting,
    'text-rotator': this.textRotator,
    'text-column-formatter': this.textColumnFormatter,
    'text-repeater': this.textRepeater,
    'text-transposer': this.textTransposer,
    'text-replacer': this.textReplacer
  };

  readonly metaContent: { [key: string]: any } = {
    "text-reverser": "Reverse the order of characters in your text using the Text Reverser tool. Flip your text for creative effects and new perspectives.",
    "text-randomization": "Randomize the order of characters in your text with the Text Randomization tool. Add an element of surprise and playfulness to your content.",
    "text-sorting": "Sort the characters in your text using the Text Sorting tool. Arrange characters in ascending or descending order for organization and analysis.",
    "text-rotator": "Rotate the characters in your text using the Text Rotator tool. Shift characters by a certain number of positions for encryption or playful effects.",
    "text-column-formatter": "Format text as columns using the Text Column Formatter tool. Display text in multiple columns for a structured and organized layout.",
    "text-repeater": "Repeat your text multiple times with the Text Repeater tool. Create patterns and repetitions for artistic and decorative text displays.",
    "text-transposer": "Transpose the characters in your text using the Text Transposer tool. Swap rows and columns for a transformed view of your content.",
    "text-replacer": "Replace specific characters or words in your text with the Text Replacer tool. Make substitutions to modify and refine your content."
  }

  defaultAction = 'text-reverser';
  isRoot!: boolean;
  desccription: string = "";
  readonly metaKeywords: { [key: string]: any } = {
    "text-reverser": 'Text Reverser, Reverse Text, Reverse String, Text Backwards, Flip Text, Inverted Text, Reverse Word Order, Text Flipper, Online Text Reversal, String Reversal, Text Transformation, Text Reverse Tool, Flip Words, Reverse Sentence',
    "text-randomization": 'Text Randomization, Randomize Text, Text Scrambler, Text Shuffler, Random Text Generator, Randomized Words, Online Text Randomizer, Text Mixing, Randomized Strings, Text Jumbler, Text Transformation, Randomize Sentence, Scramble Text',
    "text-sorting": 'Text Sorting, Sort Text, Alphabetize Text, Text Arrangement, Sorting Words, Online Text Sorter, Ascending Order, Descending Order, Text Organization, Alphabetical Sorting, Text Transformation, Sort Sentences, Arrange Text',
    "text-rotator": 'Text Rotator, Rotate Text, Text Spinning, Text Spinner, Rotate Sentence, Word Rotation, Text Shuffling, Online Text Rotator, Text Transformation, Sentence Spin, Text Rotation Tool, Spin Words, Sentence Spinner',
    "text-column-formatter": 'Text Column Formatter, Format Text Columns, Columnar Text, Text Alignment, Columned Text, Online Text Formatting, Text Table Generator, Column Width Adjustment, Text Transformation, Text Layout, Columnar Text Tool, Text Formatting Tool',
    "text-repeater": 'Text Repeater, Repeat Text, Duplicate Text, Text Replication, Text Copy, Online Text Repeating, Copy-Paste Text, Text Duplication, Text Cloning, Text Repetition Tool, Text Transformation, Replicate Sentence',
    "text-transposer": 'Text Transposer, Transpose Text, Swap Text, Reverse Columns, Text Exchange, Online Text Transposing, Text Transformation, Swap Words, Sentence Transposition, Text Transposition Tool, Exchange Columns',
    "text-replacer": 'Text Replacer, Replace Text, Find and Replace, Text Substitution, Text Swapping, Online Text Replacement, Text Modification, Find Text, Substitute Text, Text Replacement Tool, Text Transformation, Replace Words',

  }
  constructor(private route: ActivatedRoute, private metaService: MetaService, private infoService: InfoService) { }

  ngOnInit(): void {
    this.handleSeo()
    let action = this.route.snapshot.params['action'];
    if (action && this.buttonMappings[action]) {
      this.isRoot = false;
      this.executeFn = this.buttonMappings[action];
      this.desccription = this.infoService.getData(action);
      this.setInnerDescription(action)
    } else {
      action = this.defaultAction;
      this.executeFn = this.buttonMappings[action];
      this.isRoot = true;
    }

    this.route.params.subscribe(params => {
      const action = (params['action'] && this.metaContent[params['action']]) ? params['action'] : this.defaultAction;
      if (action) {
        this.metaService.setTitle(`${action} online`);
        this.metaService.setDescription(this.metaContent[action]);
        this.metaService.setKeywords(this.metaKeywords[action])
      }
      this.setInnerDescription(action)
    })

  }

  setInnerDescription(action: string) {
    if (action && this.infoService.getData(action)) {
      this.desccription = this.infoService.getData(action);
    } else {
      this.isRoot = true;
      this.executeFn = this.buttonMappings[this.defaultAction];
    }
  }

  private handleSeo() {
    this.metaService.setTitle('Text Manipulation Tools: Convert, Reverse, Randomize, and More');
    this.metaService.setDescription(`Explore a range of powerful text manipulation tools. Convert text between cases, reverse content, randomize characters, sort text, and apply creative transformations. Enhance your content with easy-to-use text manipulation utilities for a variety of purposes.`);
    this.metaService.setKeywords("reverse text, randomize text, sort text, rotate text, arrange text in columns, repeat text, transpose text, replace text")
  }

  onSelect(executeFn: () => void) {
    this.executeFn = executeFn;
    this.executeFn();
  }

  setOriginalText(text: string) {
    this.originalText = text;
    this.executeFn()
  }

  clearTextArea() {
    this.text = '';
    this.originalText = ''
  }

  textReverser() {
    this.text = this.originalText.split('').reverse().join('');
  }

  textRotator(textRouterCount: number = this.textRouterCount) {
    this.textRouterCount = textRouterCount;
    const rotatedText = [];
    for (let i = 0; i < this.originalText.length; i++) {
      const charCode = this.originalText.charCodeAt(i);
      rotatedText.push(String.fromCharCode(charCode + textRouterCount));
    }
    this.text = rotatedText.join('');
  }

  textColumnFormatter(columnWidth: number = this.columnWidth) {
    this.columnWidth = columnWidth;
    const formattedText = [];
    for (let i = 0; i < this.originalText.length; i += columnWidth) {
      const column = this.originalText.substring(i, columnWidth);
      formattedText.push(column);
    }
    this.text = formattedText.join('\n');
  }

  textTransposer() {
    const rows = this.originalText.split('\n');
    const transposedRows = [];

    for (let i = 0; i < rows[0].length; i++) {
      let transposedRow = '';
      for (const row of rows) {
        if (i < row.length) {
          transposedRow += row[i];
        }
      }
      transposedRows.push(transposedRow);
    }

    this.text = transposedRows.join('\n');
  }

  textRepeater(repetitions: number = this.repetitions) {
    this.repetitions = repetitions;
    this.text = this.originalText.repeat(repetitions);
  }

  textReplacer(search: string = this.search, replacement: string = this.replacement) {
    this.replacement = replacement;
    this.search = search;
    this.text = this.originalText.split(search).join(replacement);
  }

  textRotate(rotation: number) {
    const rotatedText = [];
    for (let i = 0; i < this.originalText.length; i++) {
      const charCode = this.originalText.charCodeAt(i);
      rotatedText.push(String.fromCharCode(charCode + rotation));
    }
    this.text = rotatedText.join('');
  }

  textRandomization() {
    const characters = this.originalText.split('');

    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }

    this.text = characters.join('');
  }

  textSorting() {
    const characters = this.originalText.split('');
    characters.sort();
    this.text = characters.join('');
  }

}
