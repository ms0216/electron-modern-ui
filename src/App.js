import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Grid, IconButton, ToggleButtonGroup } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { countries } from './constants';

/* Import components */
import AlertComponent from './components/feedback/Alert';
import AutocompleteComponent from './components/inputs/Autocomplete';
import ButtonComponent from './components/inputs/Button';
import CheckboxComponent from './components/inputs/Checkbox';
import FabComponent from './components/inputs/Fab';
import RadioGroupComponent from './components/inputs/RadioGroup';
import RatingComponent from './components/inputs/Rating';
import SelectComponent from './components/inputs/Select';
import SliderComponent from './components/inputs/Slider';
import SwitchComponent from './components/inputs/Switch';
import TextFieldComponent from './components/inputs/TextField';
import ButtonGroupComponent from './components/inputs/ButtonGroup';
import ToggleButtonComponent from './components/inputs/ToggleButton';

/* feedback components */
import ProgressComponent from './components/feedback/Progress';
import SnackbarComponent from './components/feedback/Snackbar';
import BackdropComponent from './components/feedback/Backdrop';
import DialogComponent from './components/feedback/Dialog';
import SkeletonComponent from './components/feedback/Skeleton';

/* data display components */
import AvatarComponent from './components/data_display/Avatar';
import BadgeComponent from './components/data_display/Badge';
import ChipComponent from './components/data_display/Chip';
import DividerComponent from './components/data_display/Divider';
import ListComponent from './components/data_display/List';
import TooltipComponent from './components/data_display/Tooltip';
import TypographyComponent from './components/data_display/Typography';
import TableComponent from './components/data_display/Table';

/* surfaces components */
import AccordionComponent from './components/surfaces/Accordion';
import AppBarComponent from './components/surfaces/AppBar';
import CardComponent from './components/surfaces/Card';
import PaperComponent from './components/surfaces/Paper';

/* layout components */
import GridComponent from './components/layout/gridv2';


function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(true); // ダイアログの開閉状態を管理するステート
  const [backdropOpen, setBackdropOpen] = React.useState(true); // Backdropの開閉状態を管理するステート

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleDialogClose = () => {
    setDialogOpen(false); // ダイアログを閉じる
  };

  const handleBackdropClose = () => {
    setBackdropOpen(false); // Backdropを閉じる
  };

  const menuItems = ['Profile', 'My account', 'Logout'];
  const radioOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  const listItems = [
    'List Item 1',
    'List Item 2',
    'List Item 3',
    'List Item 4',
    'List Item 5',
  ];
  const tabs = [
    { label: 'Item One', content: 'Item One' },
    { label: 'Item Two', content: 'Item Two' },
    { label: 'Item Three', content: 'Item Three' },
  ];

  const elements = [];

  const addElement = (element) => {
    elements.push(element);
  };

  /* input components */
  const autocomplete = new AutocompleteComponent();
  const alert = new AlertComponent();
  const button = new ButtonComponent();
  const checkbox = new CheckboxComponent();
  const fab = new FabComponent();
  const radiogroup = new RadioGroupComponent();
  const rating = new RatingComponent();
  const select = new SelectComponent();
  const slider = new SliderComponent();
  const switc = new SwitchComponent();
  const textField = new TextFieldComponent();
  const buttonGroup = new ButtonGroupComponent();
  const toggleButton = new ToggleButtonComponent();

  /* feedback components */
  const progress = new ProgressComponent();
  const snackbar = new SnackbarComponent();
  const backdrop = new BackdropComponent();
  const dialog = new DialogComponent();
  const skeleton = new SkeletonComponent();

  /* data display components */
  const avatar = new AvatarComponent();
  const badge = new BadgeComponent();
  const chip = new ChipComponent();
  const divider = new DividerComponent();
  const list = new ListComponent();
  const tooltip = new TooltipComponent();
  const typography = new TypographyComponent();
  const table = new TableComponent();

  /* surfaces components */
  const accordion = new AccordionComponent();
  const appbar = new AppBarComponent();
  const card = new CardComponent();
  const paper = new PaperComponent();

  /* layout components */
  const grid = new GridComponent();

  /* surface components */
  const acc1 = accordion.create(
    typography.create('Accordion 1').element,
    typography.create('Content for Accordion 1.').element
  );
  addElement(acc1.element);

  const ab1 = appbar.create(
    typography.create('App Bar Component', {variant: 'h6', style: { flexGrow: 1 }}).element,
    menuItems,
    anchorEl,
    handleMenu,
    handleClose
  );
  addElement(ab1.element);

  const tp1 = typography.create('Card Title', {variant: 'h5', component: 'div'});
  const tp2 = typography.create('Card Subtitle', {color: 'textSecondary'});
  const tp3 = typography.create('Card Content', {variant: 'body2'});
  const cd1 = card.create(
    tp1.element,
    tp2.element,
    tp3.element
  );
  addElement(cd1.element);

  const pp1 = paper.create(
    typography.create('Paper Title', {variant: 'h5', component: 'div'}).element,
    typography.create('Paper Content', {variant: 'body2'}).element
  );
  addElement(pp1.element);

  /* data display components */
  const av1 = avatar.create('Remy Sharp', '/static/images/avatar/1.jpg');
  addElement(av1.element);

  const badge1 = badge.create(4, 'primary', <MailIcon />);
  addElement(badge1.element);

  const ch1 = chip.create('Chip Filled');
  addElement(ch1.element);

  const dv1 = divider.create('fullWidth', 'horizontal');
  addElement(dv1.element);

  const ls1 = list.create(listItems);
  addElement(ls1.element);

  const tt1 = tooltip.create('Tooltip title',
    <IconButton aria-label="delete">
      <MailIcon />
    </IconButton>
  );
  addElement(tt1.element);

  const tp9 = typography.create('Typography', {variant: 'h2'});
  addElement(tp9.element);

  const tableHeaders = ["Name", "Age", "Country"];
  const tableRows = [
    ["John Doe", 25, "USA"],
    ["Jane Smith", 30, "UK"],
    ["Jack Johnson", 28, "Canada"]
  ];
  const tab1 = table.create(tableHeaders, tableRows);
  addElement(tab1.element);

  /* inputs components */
  const al1 = alert.createSuccessAlert('Success', 'This is a success alert.');
  addElement(al1.element);

  const al2 = alert.createErrorAlert('Error', 'This is an error alert.');
  addElement(al2.element);

  const al3 = alert.createWarningAlert('Warning', 'This is a warning alert.');
  addElement(al3.element);

  const al4 = alert.createInfoAlert('Info', 'This is an info alert.');
  addElement(al4.element);

  const ac1 = autocomplete.create('Country', countries);
  addElement(ac1.element);

  const bt1 = button.create('Show Snackbar', handleSnackbarOpen, { variant: 'contained', color: 'primary' });
  addElement(bt1.element);

  const cb1 = checkbox.create('Checkbox');
  addElement(cb1.element);

  const fb1 = fab.create('Add');
  addElement(fb1.element);

  const rg1 = radiogroup.create('Radio Group', radioOptions);
  addElement(rg1.element);

  const rt1 = rating.create('Rating');
  addElement(rt1.element);

  const sl1 = select.create('Select', countries);
  addElement(sl1.element);

  const sl2 = slider.create('Slider');
  addElement(sl2.element);

  const sw1 = switc.create('Switch');
  addElement(sw1.element);

  const tf1 = textField.createPasswordField('Password');
  addElement(tf1.element);

  const tf2 = textField.createTextField('Text Field');
  addElement(tf2.element);

  const tf3 = textField.createMultilineField('Multiline Field');
  addElement(tf3.element);

  const tf4 = textField.createNumberField('Number Field');
  addElement(tf4.element);

  const bg1 = buttonGroup.create([
    { label: "One", props: { variant: "contained" } },
    { label: "Two", props: { variant: "contained" } },
    { label: "Three", props: { variant: "contained" } },
  ]);
  addElement(bg1.element);

  const tb1 = toggleButton.create("Toggle Me1", false, (event) => console.log("Toggle Me1", event));
  const tb2 = toggleButton.create("Toggle Me2", false, (event) => console.log("Toggle Me2", event));
  const tb3 = toggleButton.create("Toggle Me3", false, (event) => console.log("Toggle Me3", event));

  addElement(
    <ToggleButtonGroup>
      {tb1.element}
      {tb2.element}
      {tb3.element}
    </ToggleButtonGroup>
  );

  /* feedback components */
  const pr1 = progress.createCircularProgress();
  addElement(pr1.element);

  const pr2 = progress.createLinearProgress();
  addElement(pr2.element);

  const sb1 = snackbar.create('Snackbar message', 'Close!', snackbarOpen, handleSnackbarClose);
  addElement(sb1.element);

  const bd1 = backdrop.create(backdropOpen, handleBackdropClose);
  addElement(bd1.element);

  const dlg1 = dialog.create(
    dialogOpen,
    handleDialogClose,
    "Dialog Title",
    "This is the dialog content.",
    [{ label: "Close", onClick: handleDialogClose }]
  );
  addElement(dlg1.element);

  const sk1 = skeleton.create("rectangular", 210, 118);
  addElement(sk1.element);

  /* layout components */
  const gr1 = grid.create(
    <Grid item xs={12} sm={6}>
      {pp1.element}
    </Grid>
  );
  addElement(gr1.element);
  
  return (
    <Container>
      {elements}
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
