import { FILM_TYPE_OPTIONS, FILM_TYPE_VALUES } from "@/shared/constants/film-search-types"
import { zodResolver } from "@hookform/resolvers/zod"
import { memo, useMemo } from "react"
import { Controller, useForm } from "react-hook-form"
import { clsx } from 'clsx'
import Select, { components, type GroupBase } from 'react-select'
import z from "zod"
import { useNavigate } from "react-router-dom"
import { APP_ROUTES } from "@/shared/constants/routes/app-routes"

const CURRENT_YEAR = new Date().getFullYear()
const MAX_YEAR = CURRENT_YEAR + 5;


const FilmSearch = () => {
    const navigate = useNavigate()
    const shema = z.object({
        query: z.string().min(3, 'Слишком короткий запрос').max(48, 'Слишком длинный запрос'),
        year: z.union([
            z.literal("any"),
            z.number().min(1900, 'Некорректный год').max(MAX_YEAR, 'Некорректный год'),
        ]),
        type: z.enum(FILM_TYPE_VALUES, {
            message: 'Выберите корректный тип'
        }).refine(val => val !== undefined, {
            message: 'Выберите тип для поиска'
        })
    })

    type Shema = z.infer<typeof shema>

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
        control
    } = useForm<Shema>({
        defaultValues: {
            query: '',
            year: "any",
            type: FILM_TYPE_OPTIONS.ANY.value
        },
        resolver: zodResolver(shema)
    })
        
    const handleSearchFilm = () => {
        const params = `?q=${getValues("query")}&y=${getValues("year")}&type=${getValues("type")}`;
        navigate(`${APP_ROUTES.SEARCH.path}${params}`);
        reset({
            query: '',
            year: "any",
            type: FILM_TYPE_OPTIONS.ANY.value
        })
    }

    type YearOption = {
        value: number | "any";
        label: string;
    };
    const yearOptions = useMemo(() => {
        const years: YearOption[] = [{ value: "any", label: "Любой" }]
              
        for(let year = MAX_YEAR; year >= 1900; year -= 1) {
            years.push({
                value: year,
                label: year.toString()
            })
        } 
 
        return years;
    }, [MAX_YEAR]) 

    type TypeOptions = { value: string, label: string }
    const typeOptions: TypeOptions[] = useMemo(
        () => Object.values(FILM_TYPE_OPTIONS), 
        [FILM_TYPE_OPTIONS]
    )

    return(
        <form 
            className="flex flex-wrap justify-between items-center gap-3 border border-white rounded w-full p-1"
            onSubmit={handleSubmit(handleSearchFilm)}
        >
            <div className="grow-10 min-w-[200px]">
                <input
                    className={clsx({
                        "w-full bg-white outline-none h-8 border px-3 py-1 rounded": true,
                        "border-red-200": errors.query,
                        "border-green-200": !errors.query
                    })}  
                    {...register("query")} 
                    type="text" 
                    placeholder="Введите название фильма" 
                    name="query"
                />

            </div>
            <div className="flex justify-between grow-1">
                <div className="flex items-center gap-1">
                    <label htmlFor="year">Год:</label>
                    <Controller
                        control={control}
                        name="year"
                        render={({ field }) => (
                            <Select<YearOption, false, GroupBase<YearOption>>
                                styles={{
                                    control: (base, state) => ({
                                    ...base,
                                        minHeight: "32px",     
                                        height: "32px",
                                        boxShadow: "none",            
                                        borderRadius: "0.25rem",
                                        cursor: 'pointer',
                                        borderColor: state.isFocused ? "#9ca3af" : "#e5e7eb",
                                    }),
                                    valueContainer: (base) => ({
                                        ...base,
                                        padding: "0 0.5rem",
                                    }),
                                    indicatorsContainer: (base) => ({
                                        ...base,
                                        height: "32px",
                                    }),
                                    option: (base) => ({
                                        ...base,
                                        padding: "0.25rem 0.75rem",
                                        cursor: 'pointer'
                                    }),
                                }}
                                options={yearOptions}
                                value={yearOptions.find(opt => opt.value === field.value)}
                                onChange={newValue => field.onChange(newValue?.value)}
                                onBlur={field.onBlur}
                                components={{
                                    Option: memo(props => <components.Option {...props} />),
                                }}
                            />
                        )}
                    />
                </div>
                <div
                    className="flex items-center gap-1"
                >
                    <label>Тип: </label>
                    <Controller
                        control={control}
                        name="type"
                        render={({field}) => (
                            <Select<TypeOptions, false, GroupBase<TypeOptions>>
                                styles={{
                                    control: (base, state) => ({
                                    ...base,
                                        minHeight: "32px",     
                                        height: "32px",
                                        minWidth: "120px",
                                        boxShadow: "none",            
                                        borderRadius: "0.25rem",
                                        cursor: 'pointer',
                                        borderColor: state.isFocused ? "#9ca3af" : "#e5e7eb",
                                    }),
                                    valueContainer: (base) => ({
                                        ...base,
                                        padding: "0 0.5rem",  
                                    }),
                                    indicatorsContainer: (base) => ({
                                        ...base,
                                        height: "32px",
                                    }),
                                    option: (base) => ({
                                        ...base,
                                        padding: "0.25rem 0.75rem",
                                        cursor: 'pointer'
                                    }),
                                }}
                                options={typeOptions}
                                value={typeOptions.find(opt => opt.value === field.value)}
                                onChange={newValue => field.onChange(newValue?.value)}
                                onBlur={field.onBlur}
                                components={{
                                    Option: memo(props => <components.Option {...props}/>),
                                }}
                            />
                        )} />

                </div>
                <button 
                    className={clsx({
                        "text-white h-8 min-w-24 rounded border border-bray-200 font-semibold": true,
                        "bg-blue-700 cursor-pointer hover:bg-blue-500": !errors.query,
                        "bg-gray-400": errors.query 
                    })}
                    type="submit"
                    disabled={!!errors.query}
                >
                    Искать
                </button>
            </div> 
        </form>
    )
}

export default FilmSearch