import reducer from '../todoReducer';
import actionTypes from 'constants/actionTypes';

describe('TodoReducer', () => {
  describe('ADD_TODO action', () => {
    it('should create a new todo when the list is empty', () => {
      expect(
        reducer(undefined, {
          type: actionTypes.ADD_TODO,
        }).todoList.length
      ).toEqual(1);
    });

    it('should add the todo to the existing list', () => {
      expect(
        reducer(
          {
            todoList: [{ id: '123', content: 'existing' }],
          },
          {
            type: actionTypes.ADD_TODO,
          }
        ).todoList.length
      ).toEqual(2);
    });

    it('should generate a new id', () => {
      expect(
        reducer(undefined, {
          type: actionTypes.ADD_TODO,
        }).todoList[0].id
      ).toBeDefined();
    });
  });

  describe('EDIT_TODO action', () => {
    it('should edit the existing todo', () => {
      expect(
        reducer(
          {
            todoList: [
              { id: '123', content: 'existing' },
              { id: '1234', content: 'existing 2' },
            ],
          },
          {
            type: actionTypes.EDIT_TODO,
            data: {
              id: '123',
              content: 'new value',
            },
          }
        ).todoList
      ).toEqual([
        { id: '123', content: 'new value' },
        { id: '1234', content: 'existing 2' },
      ]);
    });

    it('should not edit the existing todo if the id does not exist', () => {
      expect(
        reducer(
          {
            todoList: [{ id: '123', content: 'existing' }],
          },
          {
            type: actionTypes.EDIT_TODO,
            data: {
              id: '222',
              content: 'new value',
            },
          }
        ).todoList
      ).toEqual([{ id: '123', content: 'existing' }]);
    });
  });

  describe('TOGGLE_TODO action', () => {
    it('should toggle the existing todo', () => {
      expect(
        reducer(
          {
            todoList: [
              { id: '123', content: 'existing', isCompleted: true },
              { id: '1234', content: 'existing 2' },
            ],
          },
          {
            type: actionTypes.TOGGLE_TODO,
            data: {
              id: '123',
            },
          }
        ).todoList
      ).toEqual([
        { id: '123', content: 'existing', isCompleted: false },
        { id: '1234', content: 'existing 2' },
      ]);
    });

    it('should not toggle the existing todo if the id does not exist', () => {
      expect(
        reducer(
          {
            todoList: [{ id: '123', content: 'existing' }],
          },
          {
            type: actionTypes.TOGGLE_TODO,
            data: {
              id: '222',
            },
          }
        ).todoList
      ).toEqual([{ id: '123', content: 'existing' }]);
    });
  });

  describe('DELETE_TODO action', () => {
    it('should delete the existing todo', () => {
      expect(
        reducer(
          {
            todoList: [
              { id: '123', content: 'existing', isCompleted: true },
              { id: '1234', content: 'existing 2' },
            ],
          },
          {
            type: actionTypes.DELETE_TODO,
            data: {
              id: '123',
            },
          }
        ).todoList
      ).toEqual([
        { id: '1234', content: 'existing 2' },
      ]);
    });

    it('should not toggle the existing todo if the id does not exist', () => {
      expect(
        reducer(
          {
            todoList: [{ id: '123', content: 'existing' }],
          },
          {
            type: actionTypes.DELETE_TODO,
            data: {
              id: '222',
            },
          }
        ).todoList
      ).toEqual([{ id: '123', content: 'existing' }]);
    });
  });
});
