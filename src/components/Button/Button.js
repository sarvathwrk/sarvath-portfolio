import { Icon } from 'components/Icon';
import { Loader } from 'components/Loader';
import { Transition } from 'components/Transition';
import RouterLink from 'next/link';
import { forwardRef } from 'react';
import { classes } from 'utils/style';
import styles from './Button.module.css';

function isExternalLink(href) {
  return href?.startsWith('http');
}

export const Button = forwardRef(({ href, ...rest }, ref) => {
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

const ButtonContent = forwardRef(
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
        {children && <span className={styles.text}>{children}</span>}
        {iconEnd && (
          <Icon
            className={styles.icon}
            data-end={!iconOnly}
            data-shift={iconHoverShift}
            icon={iconEnd}
          />
        )}
        <Transition unmount in={loading}>
          {visible => (
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
