import React, { useState } from 'react'
import { Box, Button, Grid, Link, makeStyles, TextField } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    grid: {
        padding: '30px 20px'
    },
    textField: {
        marginBlock: theme.spacing(2)
    },
    button: {
        marginBlock: theme.spacing(2)
    }
}))
const ShortUrl = () => {
    const classes = useStyles()
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        setShortUrl('')
        const { data } = await axios.post(
            'api/shorturl',
            { url },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        setShortUrl(data.shortUrl)
    }
    return (
        <Grid className={classes.grid} container spacing={2} direction='row' justify='center'>
            <Grid item xs={12} md={8}>
                <form onSubmit={submitHandler}>
                    <TextField
                        className={classes.textField}
                        id="search-url"
                        label="Enter URL"
                        variant="outlined"
                        type="search"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        fullWidth
                        required
                    />
                    <Button className={classes.button} fullWidth type='submit' color='primary' variant='contained'>
                        Search
                    </Button>
                </form>
                <Box my={2} textAlign='center'>
                    {shortUrl && <Link href={`${shortUrl}`} target='_blank' >{shortUrl}</Link>}
                </Box>
            </Grid>
        </Grid>
    )
}

export default ShortUrl
