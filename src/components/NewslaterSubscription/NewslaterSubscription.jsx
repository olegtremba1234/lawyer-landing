import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

function InputSubscription() {
    const [data, setData] = React.useState({
        email: '',
        status: 'initial',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setData((current) => ({ ...current, status: 'loading' }));
        try {
            // Replace timeout with real backend operation
            setTimeout(() => {
                setData({ email: '', status: 'sent' });
            }, 1500);
        } catch (error) {
            setData((current) => ({ ...current, status: 'failure' }));
        }
    };

    return (
        <form onSubmit={handleSubmit} id="demo">
            <FormControl>
                {/* <FormLabel
                    sx={(theme) => ({
                        '--FormLabel-color': theme.vars.palette.primary.plainColor, paddingBottom: "30px", color: "#fff"
                    })}
                >
                    Subscribe For Latest
                    Newsletter
                </FormLabel> */}
                <Input
                    sx={{ '--Input-decoratorChildHeight': '45px', color: "#737373", fontFamily: 'Montserrat', fontStyle: "normal", fontWeight: "400" }}
                    placeholder="Your Email"
                    type="email"
                    required
                    value={data.email}
                    onChange={(event) =>
                        setData({ email: event.target.value, status: 'initial' })
                    }
                    error={data.status === 'failure'}
                    endDecorator={
                        <Button
                            variant="solid"
                            color="warning"
                            loading={data.status === 'loading'}
                            type="submit"
                            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, color: "#fff", fontFamily: 'Montserrat', fontStyle: "normal", fontWeight: "400" }}
                        >
                            Subscribe
                        </Button>
                    }
                />
                {data.status === 'failure' && (
                    <FormHelperText
                        sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                    >
                        Oops! something went wrong, please try again later.
                    </FormHelperText>
                )}

                {data.status === 'sent' && (
                    <FormHelperText
                        sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                    >
                        You are finally subscribe!
                    </FormHelperText>
                )}
            </FormControl>
        </form>
    );
}

export default InputSubscription