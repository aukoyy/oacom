import classNames from "classnames";
import { ExternalLinkIcon } from "./icons/external-link-icon";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export function ExternalLink({ href, children, className = "", label }: ExternalLinkProps) {
  // Remove https:// from display text if present
  const displayText = typeof children === 'string'
    ? children.replace(/^https?:\/\//, '')
    : children;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames('inline-flex items-center space-x-1', className)}
      aria-label={label}
    >
      <span>{label ? label : displayText}</span>
      <ExternalLinkIcon />
    </a>
  );
}