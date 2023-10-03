import { PProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames'

export const Tag = ({ size = 'M', children, href, color = 'ghost', className, ...props }: PProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className,
            {
                [styles.S]: size == 'S',
                [styles.M]: size == 'M',
                [styles.ghost]: color == 'ghost',
                [styles.primary]: color == 'primary',
                [styles.red]: color == 'red',
                [styles.grey]: color == 'grey',
                [styles.green]: color == 'green',


            }
        )}
            {...props}
        >{
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }

        </div>
    );
};