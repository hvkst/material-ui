import React from 'react';
import { OverrideProps } from '@mui/types';
import ClickAwayListener, { ClickAwayListenerProps } from '../ClickAwayListener';
import { UseSnackbarParameters } from './useSnackbar.types';
import { SlotComponentProps } from '../utils';

export interface SnackbarUnstyledComponentsPropsOverrides {}

export interface SnackbarUnstyledOwnProps extends Omit<UseSnackbarParameters, 'ref'> {
  children?: React.ReactNode;
  /**
   * The components used for each slot inside the Snackbar.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots?: {
    root?: React.ElementType;
  };
  /**
   * The props used for each slot inside the Snackbar.
   * @default {}
   */
  slotProps?: {
    clickAwayListener?: SlotComponentProps<
      typeof ClickAwayListener,
      SnackbarUnstyledComponentsPropsOverrides,
      SnackbarUnstyledOwnerState
    >;
    root?: SlotComponentProps<
      'div',
      SnackbarUnstyledComponentsPropsOverrides,
      SnackbarUnstyledOwnerState
    >;
  };
  /**
   * The prop used to handle exited transition and unmount the component.
   * @default true
   */
  exited?: boolean;
}

export interface SnackbarUnstyledTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & SnackbarUnstyledOwnProps;
  defaultComponent: D;
}

export type SnackbarUnstyledProps<
  D extends React.ElementType = SnackbarUnstyledTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<SnackbarUnstyledTypeMap<P, D>, D> & {
  component?: D;
};

export type SnackbarUnstyledOwnerState = SnackbarUnstyledProps;

export type SnackbarUnstyledRootSlotProps = {
  ownerState: SnackbarUnstyledOwnerState;
  className?: string;
  children?: React.ReactNode;
  ref: React.Ref<any>;
};

export interface SnackbarUnstyledClickAwayListenerSlotProps extends ClickAwayListenerProps {
  ownerState: SnackbarUnstyledOwnerState;
}
