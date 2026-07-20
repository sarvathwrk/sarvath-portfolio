import { Icon, type IconName } from '@/components/ui/Icon';
import { Loader } from '@/components/ui/Loader';
import { Transition as TransitionBase } from '@/components/ui/Transition';
import RouterLink from 'next/link';
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  forwardRef,
} from 'react';
import { classes } from '@/lib/style';
import styles from './Button.module.css';

// `Transition` is a JS-origin component whose lifecycle callbacks are invoked
// via optional chaining (so they're optional at runtime). Re-type the binding
// here so those callbacks aren't treated as required props.
const Transition = TransitionBase as (
  props: Partial<ComponentProps<typeof TransitionBase>>
) => ReturnType<typeof TransitionBase>;

function isExternalLink(href?: string) {
  return href?.startsWith('http');
}

export interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'ref'> {
  as?: ElementType;
  secondary?: boolean;
  loading?: boolean;
  loadingText?: string;
  icon?: IconName;
  iconEnd?: IconName;
  iconHoverShift?: boolean;
  iconOnly?: boolean;
  fontSize?: string | number | false;
  href?: string;
  rel?: string;
  target?: string;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ href, ...rest }, ref) => {
  const isExternal = href && isExternalLink(href);

  if (isExternal || !href) {
    // Render a simple button or link for external URLs
    return <ButtonContent href={href} ref={ref} {...rest} />;
  }

  // Render RouterLink for internal URLs
  return (
    <RouterLink passHref href={href} scroll={false}>
      <ButtonContent ref={ref} {...rest} />
    </RouterLink>
  );
});

const ButtonContent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      as: Component = 'button',
      secondary,
      loading,
      loadingText = 'loading',
      icon,
      iconEnd,
      iconHoverShift,
      iconOnly,
      fontSize = false,
      children,
      rel,
      target,
      href,
      disabled,
      ...rest
    },
    ref
  ) => {
    const isExternal = href && isExternalLink(href);
    const Tag = Component;

    return (
      <Tag
        className={classes(styles.button, className)}
        data-loading={loading ? true : undefined}
        data-icon-only={iconOnly ? true : undefined}
        data-secondary={secondary ? true : undefined}
        data-icon={icon || undefined}
        href={Tag === 'a' ? href : undefined} // Apply href only if Tag is 'a'
        rel={isExternal ? 'noopener noreferrer' : rel || undefined}
        target={isExternal ? '_blank' : target || undefined}
        disabled={Tag === 'button' ? disabled : undefined} // Apply disabled only if Tag is 'button'
        ref={ref}
        {...rest}
      >
        {icon && (
          <Icon
            className={styles.icon}
            data-start={!iconOnly}
            data-shift={iconHoverShift}
            icon={icon}
          />
        )}
        {children && (
          <span
            style={{ fontSize: fontSize ? fontSize : 'default' }}
            className={styles.text}
          >
            {children}
          </span>
        )}
        {iconEnd && (
          <Icon
            className={styles.icon}
            data-end={!iconOnly}
            data-shift={iconHoverShift}
            icon={iconEnd}
          />
        )}
        <Transition unmount in={loading}>
          {(visible: boolean) => (
            <Loader
              className={styles.loader}
              size={32}
              text={loadingText}
              data-visible={visible}
            />
          )}
        </Transition>
      </Tag>
    );
  }
);
