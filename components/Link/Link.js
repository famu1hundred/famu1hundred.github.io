"use client";

import React, { DetailedHTMLProps, AnchorHTMLAttributes, Ref } from 'react'
import NextLink from 'next/link'
import styles from './styles.module.css'

export default function Link({
  href,
  className,
  children,
  ...rest
}) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        className={`${styles.anchor} ${className}`}
        {...rest}
      >
        {children}
      </NextLink>
    )
  }

  return (
    <a
      className={`${styles.anchor} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {children}
    </a>
  )
}
