import CollapseIcon from '../../../assets/icons/CollapseIcon';
import ExpandIcon from '../../../assets/icons/ExpandIcon';
import { EditorContext } from '../../../context/EditorContext';
import { LocaleContext } from '../../../context/LocaleContext';
import { useContext } from 'react';

function VarsToggle() {
  const { setVisibleTab, setCollapsed, collapsed, visibleTab } =
    useContext(EditorContext);
  const { texts } = useContext(LocaleContext);

  return (
    <div className="flex justify-start items-center gap-3 switch-vars flex-none text-white h-7 mt-2">
      <span
        onClick={() => setVisibleTab('vars')}
        className={
          visibleTab === 'vars'
            ? 'text-buttonColor-300 font-semibold'
            : 'cursor-pointer hover:text-buttonColor-300'
        }
      >
        {texts.main.variables}
      </span>
      <span
        onClick={() => setVisibleTab('headers')}
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
          onClick={() => setCollapsed(false)}
        >
          <ExpandIcon />
        </button>
      ) : (
        <button
          type="button"
          className="edit-toggle"
          onClick={() => setCollapsed(true)}
        >
          <CollapseIcon />
        </button>
      )}
    </div>
  );
}

export default VarsToggle;
