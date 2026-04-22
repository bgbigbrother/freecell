import { describe, it, expect, beforeEach } from 'vitest';
import { UndoManager } from '../src/game/undoManager';
import type { Command } from '../src/game/types';

describe('UndoManager', () => {
  let undoManager: UndoManager;
  let executed: string[];
  let undone: string[];

  beforeEach(() => {
    undoManager = new UndoManager();
    executed = [];
    undone = [];
  });

  const createCommand = (id: string): Command => ({
    execute: () => executed.push(`execute-${id}`),
    undo: () => undone.push(`undo-${id}`),
  });

  it('starts with empty stack', () => {
    expect(undoManager.canUndo()).toBe(false);
  });

  it('can push commands', () => {
    undoManager.push(createCommand('1'));
    expect(undoManager.canUndo()).toBe(true);
  });

  it('undoes commands in LIFO order', () => {
    undoManager.push(createCommand('1'));
    undoManager.push(createCommand('2'));
    undoManager.push(createCommand('3'));

    undoManager.undo();
    expect(undone).toEqual(['undo-3']);

    undoManager.undo();
    expect(undone).toEqual(['undo-3', 'undo-2']);

    undoManager.undo();
    expect(undone).toEqual(['undo-3', 'undo-2', 'undo-1']);
  });

  it('cannot undo when stack is empty', () => {
    expect(undoManager.canUndo()).toBe(false);
    undoManager.undo(); // Should not throw
    expect(undone).toEqual([]);
  });

  it('clear empties the stack', () => {
    undoManager.push(createCommand('1'));
    undoManager.push(createCommand('2'));
    expect(undoManager.canUndo()).toBe(true);

    undoManager.clear();
    expect(undoManager.canUndo()).toBe(false);
    undoManager.undo(); // Should not throw
    expect(undone).toEqual([]);
  });

  it('handles multiple pushes and undos correctly', () => {
    undoManager.push(createCommand('a'));
    undoManager.push(createCommand('b'));
    undoManager.undo();
    undoManager.push(createCommand('c'));
    undoManager.undo();
    expect(undone).toEqual(['undo-b', 'undo-c']);
  });
});