import { LocaleContext } from '../../../context/LocaleContext';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  setCollapsed,
  setVisibleTab,
} from '../../../redux/features/editorSlice';
import { SMALL_ICON } from '../../../utils/documentation-helper';
import { useContext } from 'react';

function VarsToggle() {
  const { collapsed, visibleTab } = useAppSelector(
    (state) => state.editorState
  );
  const { texts } = useContext(LocaleContext);
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-3 switch-vars">
      <span
        data-testid="vars-toggle"
        onClick={() => dispatch(setVisibleTab('vars'))}
        className={
          visibleTab === 'vars'
            ? 'text-teal-500 font-bold'
            : 'cursor-pointer hover:text-teal-400'
        }
      >
        {texts.main.variables}
      </span>
      <span
        data-testid="headers-toggle"
        onClick={() => dispatch(setVisibleTab('headers'))}
        className={
          visibleTab === 'headers'
            ? 'text-teal-500 font-bold'
            : 'cursor-pointer hover:text-teal-400'
        }
      >
        {texts.main.headers}
      </span>
      {collapsed ? (
        <img
          src="./expand.svg"
          onClick={() => dispatch(setCollapsed(false))}
          className={SMALL_ICON}
          alt="Show Variables and Headers"
          title="Show Variables and Headers"
        />
      ) : (
        <img
          src="./collapse.svg"
          onClick={() => dispatch(setCollapsed(true))}
          className={SMALL_ICON}
          alt="Hide Variables and Headers"
          title="Hide Variables and Headers"
        />
      )}
    </div>
  );
}

export default VarsToggle;
