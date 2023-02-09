import { getDocs, collection, where, query, setDoc, doc } from 'firebase/firestore';
import {auth, db} from '../firebase'
import {IHumanEntities} from "../models/entities";
import uid from 'uniqid'
import {IHuman} from "../models/firebase";

export default class Archive {
    static setHuman = async () => {
        const docId = uid()
        await setDoc(doc(db, 'users', auth.currentUser!.uid, 'entities', docId), {
            id: docId,
            name: 'Томми Миллер',
            status: 'alive',
            age: 48,
            race: 'Европеоидная',
            kind: 'human',
            date_of_birth: '1988-1990',
            date_of_death: null,
            place_of_birth: 'Остин, Техас, США',
            place_of_birth_id: null,
            biography: 'Томми вырос в Техасе вместе со своим братом [link=/humans/ldgumrxc;name=Джоэл Миллер]Джоэлом[link]. Всю жизнь он находился под опекой брата, а позже помогал ему растить свою племянницу Сару.\nПервое появление Томми в игре приходится на телефонный разговор с Джоэлом, в котором обсуждается важность сохранения контракта с местным подрядчиком. Несколько часов спустя, возможно, став свидетелем начала эпидемии, он делает тревожный звонок домой к Джоэлу, но отвечает Сара. Томми не успел договорить, линия обрывается. Он пытается связаться с братом по сотовому, но безуспешно. Не имея возможности выйти на контакт с родными, Томми садится в свой джип и направляется в сторону их дома. Томми поспевает забрать Джоэлу и Сару, которые уже столкнулись с заражённым КЦИ их соседом, Джимми Куперсом. Вместе они пытаются выбраться из города. Проезжая мимо идущих на обочине дороги людей, Томми пытается подобрать их, однако Джоэл категорически запрещает это делать. Попав в пробку и чуть не став жертвой нападения заражённых, Томми разворачивает машину и съезжает с шоссе, пытаясь найти объездной путь через центральные улицы города. Уже в городе семья попадает в аварию. Томми удается избежать серьёзных травм, однако его племяннице повезло куда меньше. Джоэл вынужден нести её на руках, Томми прикрывает их из револьвера, который получает от брата. Их пеший переход через улицы, кишащие заражёнными, проходит успешно. Как бы то ни было, очередная волна заражённых заставляет их искать укрытие в одном из зданий. Томми приходится держать дверь, чтобы его брат и племянница смогли уйти как можно дальше. К сожалению, точно неизвестно, каким образом Томми удалось избавиться от заражённых, ломящихся в дверь. Можно предположить, что ему удалось убежать или спрятаться, внимание атакующих было переключено на что-то другое или же Томми удалось застрелить всех нападающих. Томми удаётся подоспеть по следам родных именно в тот момент, когда солдат, стоящий к нему спиной, был готов сделать Джоэлу контрольный выстрел. Не тратя времени на размышления, Томми первый делает выстрел, убивая военного, но Сару уже не спасти. Она умирает от полученной раны в живот на руках плачущего Джоэла. ',
            description: 'Персонаж игры The Last of Us, выживающий в условиях эпидемии кордицепсной церебральной инфекции. Младший брат Джоэла, дядя Сары, муж Марии и бывший член «Цикад». Джеффри Пирс озвучил персонажа и принял участие в «захвате движения» для этого героя.',
            house: 'Джексон, Вайоминг, США',
            house_id: null,
            family: null,
            family_id: null,
            mother: null,
            mother_id: null,
            father: null,
            father_id: null,
            brothers: [{
                id: 'ldgumrxc',
                name: 'Джоэл Миллер'
            }],
            sisters: [],
            children: [],
        }).catch((reason) => {console.log(reason)})
    }
    // {
    //                 name: 'Сара Миллер',
    //                 id: uid(),
    //                 mother: null,
    //                 mother_id: uid(),
    //                 father: 'Джоэл Миллер',
    //                 father_id: docId
    //             }
    static getAllHumans = async () => {
        return await getDocs(
            query(
                collection(db, 'users', auth.currentUser!.uid, 'entities'),
                where('kind', '==', 'human')
            ))
            .then((docs) => {
                const data: IHumanEntities = {
                    byId: {},
                    allIds: [],
                }
                docs.forEach((doc) => {
                    data.byId[doc.data().id] = doc.data() as IHuman
                    data.allIds.push({
                        id: doc.data().id,
                        name: doc.data().name,
                        kind: doc.data().kind
                    })
                })
                return data
            })
            .catch((reason) => {
                console.log(reason)
                return {byId: {}, allIds: []}
            })
    }
    static getHumanById = (id: string) => {

    }
}