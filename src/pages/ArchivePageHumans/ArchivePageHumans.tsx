import React, {memo, useEffect} from 'react';
import ArchiveLayout from "../../components/ArchiveLayout/ArchiveLayout";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getHumans} from "../../store/humansSlice";
import Loader from "../../components/UI/Loader/Loader";

const ArchivePageHumans = memo(() => {

    const humans = useAppSelector(state => state.humansReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getHumans())
    }, [])

    if (humans.loading) return <Loader />

    return (
        <ArchiveLayout
            entities={humans}
            placeholderName={'Люди'}
            placeholderText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, aspernatur assumenda atque commodi eius, exercitationem fugiat impedit necessitatibus nemo neque numquam odio omnis. Ad blanditiis debitis dolore doloribus fugit illo laboriosam nam nulla numquam obcaecati officia praesentium, quisquam reiciendis voluptate voluptatibus. Amet asperiores aut consequuntur dolor eligendi illum molestiae, nemo neque nostrum omnis, optio quae sequi voluptate. Cum delectus dolores illo laboriosam magni nisi quaerat rem ut, veniam voluptatum. Adipisci autem fugit repudiandae vitae. Culpa delectus in, ipsa quod repellat reprehenderit voluptatibus. At, aut, earum? A, accusamus animi aspernatur eos facilis non quam quia recusandae repellat suscipit temporibus unde. \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquam commodi corporis delectus deserunt dignissimos distinctio ea earum eveniet expedita explicabo facilis fugit harum itaque iure labore laboriosam magni maiores maxime minima modi nobis non nostrum omnis quam quisquam quos, rem repellat rerum sapiente similique sint soluta temporibus totam veritatis voluptates! Ad animi asperiores aspernatur deserunt dignissimos distinctio dolorem illum ipsa minima modi natus nemo nesciunt nostrum, placeat, quam quibusdam temporibus veniam? Adipisci at aut autem commodi corporis debitis deserunt dicta, dolor dolore earum eius esse explicabo facere illo, iusto minus modi molestiae neque nisi quibusdam quidem saepe vitae? Accusamus alias amet assumenda consequatur cum delectus deserunt dolore, dolores ipsum iure, magnam minima neque officiis perspiciatis quasi quidem recusandae sint suscipit ut voluptates? Eveniet iusto recusandae tenetur. Adipisci architecto consectetur deleniti, dolorem eaque eligendi, eveniet, explicabo ipsam labore quia ratione saepe sapiente sit. Aperiam aut blanditiis dignissimos dolore ex inventore iste, labore, nam neque nesciunt nihil nisi odit provident quaerat, saepe tempore temporibus totam! Accusantium consequatur dolores, harum ipsam iste maiores nam praesentium sint voluptatem voluptates. A animi cum cupiditate ea illum nam placeat, quaerat quidem quis saepe sunt tempora, ullam vero voluptas voluptatem! Ad earum ipsam laudantium modi nihil optio, quia! Adipisci aut delectus ex fuga id iusto laudantium non obcaecati perferendis quia, quisquam rem rerum, sapiente sed, vitae. Alias atque cumque dolor dolorem doloribus dolorum ducimus et eum expedita facilis fugiat harum illo minus nesciunt nisi nulla numquam officia perferendis placeat provident quae quas qui quibusdam quidem, quos recusandae repellendus repudiandae sequi sit temporibus! Amet assumenda aut autem beatae, cupiditate delectus distinctio dolor esse excepturi ipsam magnam molestias provident quia quibusdam quisquam rem repellat repellendus sunt suscipit ullam vitae voluptate voluptatibus, voluptatum! Alias animi consequatur esse facere facilis ipsum, iure mollitia obcaecati officiis porro quidem quis repellat.'}
        />
    );
});

export default ArchivePageHumans;