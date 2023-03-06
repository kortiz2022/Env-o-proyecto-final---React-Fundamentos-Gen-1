import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

const NewsAllData = ({ data }) => {
    const { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id } = data;
    return (
        <Card>
            <CardHeader floated={false}>
                <img
                    src={newsPreviewImage}
                    alt="img-blur-shadow"

                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {newsTitle}
                </Typography>
                <Typography>
                    {newsDescription.slice(0,120)}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography className='capitalize' variant="small"><span className='font-semibold'>Category: </span>{newsCategory}</Typography>
            </CardFooter>
        </Card>
    );
};

export default NewsAllData;