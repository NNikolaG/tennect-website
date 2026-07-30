type ActionIconName = "details" | "download" | "email";

type ActionIconProps = {
  badge?: boolean;
  name: ActionIconName;
};

export function ActionIcon({ badge = false, name }: ActionIconProps) {
  return (
    <span
      className={`action-icon action-icon-${name}${
        badge ? " action-icon-badge" : ""
      }`}
      aria-hidden="true"
    >
      <span className="action-icon-glyph" />
    </span>
  );
}
