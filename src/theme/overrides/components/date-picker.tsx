import { Theme } from '@mui/material/styles';
import { buttonClasses } from '@mui/material/Button';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const dateList = [
  'DatePicker',
  'DateTimePicker',
  'StaticDatePicker',
  'DesktopDatePicker',
  'DesktopDateTimePicker',
  'MobileDatePicker',
  'MobileDateTimePicker',
];

const timeList = ['TimePicker', 'MobileTimePicker', 'StaticTimePicker', 'DesktopTimePicker'];

const switchIcon = () => <Iconify icon="eva:arrow-ios-back-fill" width={24} />;

const leftIcon = () => <Iconify icon="eva:arrow-ios-back-fill" width={24} />;

const rightIcon = () => <Iconify icon="eva:arrow-ios-back-fill" width={24} />;

const calendarIcon = () => <Iconify icon="eva:arrow-ios-back-fill" width={24} />;

const clockIcon = () => <Iconify icon="eva:arrow-ios-back-fill" width={24} />;

const desktopTypes = dateList.reduce((result: Record<string, any>, currentValue) => {
  result[`Mui${currentValue}`] = {
    defaultProps: {
      slots: {
        openPickerIcon: calendarIcon,
        leftArrowIcon: leftIcon,
        rightArrowIcon: rightIcon,
        switchViewIcon: switchIcon,
      },
    },
  };

  return result;
}, {});

const timeTypes = timeList.reduce((result: Record<string, any>, currentValue) => {
  result[`Mui${currentValue}`] = {
    defaultProps: {
      slots: {
        openPickerIcon: clockIcon,
        rightArrowIcon: rightIcon,
        switchViewIcon: switchIcon,
      },
    },
  };

  return result;
}, {});

export function datePicker(theme: Theme) {
  return {
    MuiPickersLayout: {
      styleOverrides: {
        root: {
          '& .MuiPickersLayout-actionBar': {
            [`& .${buttonClasses.root}:last-of-type`]: {
              backgroundColor: theme.palette.text.primary,
              color:
                theme.palette.mode === 'light'
                  ? theme.palette.common.white
                  : theme.palette.grey[800],
            },
          },
        },
      },
    },

    // Date
    ...desktopTypes,

    // Time
    ...timeTypes,
  };
}
