import { generatePasswords, getAnswersFromCLI } from './src/Quickstart';
import { PromptType } from 'prompts';
jest.unmock('mock-stdin');

describe('generatePasswords', () => {
  it('should generate 100 passwords', () => {
    let passwords = '';
    for (const password of generatePasswords()) {
      expect(password).toHaveLength(36);
      passwords += `${password}\n`;
    }
    console.log(passwords);
  });
});

describe('getAnswersFromCLI', () => {
  const samplePrompts: Array<{
    name: string;
    message: string;
    type: PromptType;
    initial: string;
  }> = [
    {
      name: 'firstname',
      message: 'What is your first name?',
      type: 'text',
      initial: 'Ajay',
    },
    // {
    //   name: 'lastname',
    //   message: 'What is your last name?',
    //   type: 'text',
    //   initial: 'Ganapathy',
    // },
    // {
    //   name: 'hobby',
    //   message: 'What is your hobby?',
    //   type: 'text',
    //   initial: 'running',
    // },
  ];

  let stdin;
  beforeEach(() => {
    stdin = require('mock-stdin').stdin();
  });
  it('should receive ', async () => {
    let i = 0;
    const send = () => {
      process.nextTick(stdin.send('abcd\r'));
      // todo: figure out how to wait for prompt before sending next response
    };
    send();
    const results = await getAnswersFromCLI(samplePrompts);
    console.log(results);
    // console.log('alldata', alldata);
  });
});
