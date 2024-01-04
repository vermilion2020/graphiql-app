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

  return (
    <div className="flex justify-start items-center gap-3 switch-vars flex-none text-white h-7 mt-2">
      <span
        data-testid="vars-toggle"
        onClick={() => dispatch(setVisibleTab('vars'))}
        className={
          visibleTab === 'vars'
            ? 'text-buttonColor-300 font-semibold'
            : 'cursor-pointer hover:text-buttonColor-300'
        }
      >
        {texts.main.variables}
      </span>
      <span
        data-testid="headers-toggle"
        onClick={() => dispatch(setVisibleTab('headers'))}
        className={
          visibleTab === 'headers'
            ? 'text-buttonColor-300 font-semibold'
            : 'cursor-pointer hover:text-buttonColor-300'
        }
      >
        {texts.main.headers}
      </span>
      {collapsed ? (
        <button
          type="button"
          className="edit-toggle"
          onClick={() => dispatch(setCollapsed(false))}
        >
          <ExpandIcon />
        </button>
      ) : (
        <button
          type="button"
          className="edit-toggle"
          onClick={() => dispatch(setCollapsed(true))}
        >
          <CollapseIcon />
        </button>
      )}
    </div>
  );
}

export default VarsToggle;
