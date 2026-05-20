type Props = {
  connected: boolean;
  daemonOnline: boolean;
};

export function DaemonStatus({ connected, daemonOnline }: Props) {
  let label: string;
  let color: string;

  if (!connected) {
    label = "Connecting…";
    color = "bg-yellow-500";
  } else if (daemonOnline) {
    label = "Daemon online";
    color = "bg-green-500";
  } else {
    label = "Daemon offline";
    color = "bg-zinc-400 dark:bg-zinc-600";
  }

  return (
    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
      <span
        className={`inline-block h-2 w-2 rounded-full ${color} ${
          connected && daemonOnline ? "animate-pulse" : ""
        }`}
      />
      <span>{label}</span>
    </div>
  );
}
