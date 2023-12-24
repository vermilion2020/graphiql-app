import { EditorContext } from '../../../context/EditorContext';
import { LocaleContext } from '../../../context/LocaleContext';
import { SMALL_ICON } from '../../../utils/documentation-helper';
import { useContext } from 'react';

function VarsToggle() {
  const { setVisibleTab, setCollapsed, collapsed, visibleTab } =
    useContext(EditorContext);
  const { texts } = useContext(LocaleContext);

  return (
    <div className="flex gap-3 switch-vars">
      <span
        onClick={() => setVisibleTab('vars')}
        className={
          visibleTab === 'vars'
            ? 'text-teal-500 font-bold'
            : 'cursor-pointer hover:text-teal-400'
        }
      >
        {texts.main.variables}
      </span>
      <span
        onClick={() => setVisibleTab('headers')}
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
          onClick={() => setCollapsed(false)}
          className={SMALL_ICON}
          alt="Show Variables and Headers"
          title="Show Variables and Headers"
        />
      ) : (
        <img
          src="./collapse.svg"
          onClick={() => setCollapsed(true)}
          className={SMALL_ICON}
          alt="Hide Variables and Headers"
          title="Hide Variables and Headers"
        />
      )}
    </div>
  );
}

export default VarsToggle;
