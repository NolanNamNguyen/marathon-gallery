import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getImages, getSearchOption } from '@reduxSlices/homeSlice';
import { useForm, Controller } from 'react-hook-form';

const SearchContainer = ({
  searchOptions,
  handleSearch,
  searching,
  handleGetImages,
}) => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({});
  const selectOpt = [
    { name: 'Hạ Long 2022', id: 'abc' },
    { name: 'Đà Nẵng 2022', id: '123' },
    { name: 'HCM 2023', id: 'abssc' },
  ];
  // const formName = {
  //   search_term: 'search_term',
  // };
  const handleSelectTour = (value) => {};
  const [open, setOpen] = useState(false);

  console.log('errors', errors);

  useEffect(() => {
    handleGetImages();
  }, []);

  const onSubmit = (formData) => {
    console.log('wtf formData', formData);
    handleSearch({ ...formData });
  };

  return (
    <div className="px-[40px] py-[30px] w-[70%] flex flex-col items-center bg-white border-2 mb-3 mt-3">
      <h3 className="text-left">Find Images by BIB or Names</h3>
      <div className="flex w-full">
        <FormControl className="w-1/4 mr-2">
          <InputLabel id="demo-simple-select-label">Run Tour</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Run Tour"
            onChange={handleSelectTour}
          >
            {selectOpt.map((elm, i) => (
              <MenuItem key={`tour-${i}`} value={elm.id}>
                {elm.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Autocomplete
          className="w-3/4 flex flex-grow"
          id="asynchronous-demo"
          sx={{ width: 300 }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option) => option.title}
          options={searchOptions}
          loading={searching}
          renderInput={(params) => (
            <Controller
              control={control}
              name="search_term"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <TextField
                  {...params}
                  label="Asynchronous"
                  inputRef={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  onKeyDown={(e) => {
                    console.log('e', e);
                    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                      console.log('in here?');
                      console.log('value here', getValues());
                      handleSubmit(onSubmit)();
                    }
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {false ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
          )}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searching: state.homeReducer.searching,
  searchOptions: state.homeReducer.searchOptions,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearch: (params) => dispatch(getSearchOption(params)),
  handleGetImages: (params) => dispatch(getImages(params)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SearchContainer);
