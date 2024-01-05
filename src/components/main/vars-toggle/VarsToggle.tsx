import {
  setCollapsed,
  setVisibleTab,
} from '../../../redux/features/editorSlice';
import { LocaleContext } from '../../../context/LocaleContext';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { useContext } from 'react';
import ExpandIcon from '../../../assets/icons/ExpandIcon';
import CollapseIcon from '../../../assets/icons/CollapseIcon';

function VarsToggle() {
  const { collapsed, visibleTab } = useAppSelector(
    (state) => state.editorState
  );
  const { texts } = useContext(LocaleContext);
  const dispatch = useAppDispatch();

  const handleVars = () => {
    dispatch(setVisibleTab('vars'));
  };

  const handleHeaders = () => {
    dispatch(setVisibleTab('headers'));
  };

  const handleCollapsed = () => {
    dispatch(setCollapsed());
  };

  return (
    <div className="flex justify-start items-center gap-3 switch-vars flex-none text-buttonColor-200 h-7 mt-2">
      <button
        data-testid="vars-toggle"
        onClick={handleVars}
        className={
          visibleTab === 'vars'
            ? 'text-buttonColor-300 font-semibold underline'
            : 'cursor-pointer hover:text-buttonColor-300 '
        }
      >
        {texts.main.variables}
      </button>
      <button
        data-testid="headers-toggle"
        onClick={handleHeaders}
        className={
          visibleTab === 'headers'
            ? 'text-buttonColor-300 font-semibold underline'
            : 'cursor-pointer hover:text-buttonColor-300'
        }
      >
        {texts.main.headers}
      </button>
      {collapsed ? (
        <button
          type="button"
          className="edit-toggle"
          onClick={handleCollapsed}
        >
          <ExpandIcon />
        </button>
      ) : (
        <button
          type="button"
          className="edit-toggle"
          onClick={handleCollapsed}
        >
          <CollapseIcon />
        </button>
      )}
    </div>
  );
}

export default VarsToggle;
